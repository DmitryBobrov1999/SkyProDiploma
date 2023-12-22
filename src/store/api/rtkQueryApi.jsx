import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../slices/authSlice';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8090',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		if (token?.access_token) {
			headers.set('Authorization', `Bearer ${token?.access_token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		console.log('sending refresh token');
		const refreshResult = await baseQuery(
			{
				url: '/auth/login',
				method: 'PUT',
				body: {
					access_token: localStorage.getItem('access_token'),
					refresh_token: localStorage.getItem('refresh_token'),
				},
			},
			api,
			extraOptions
		);
		console.log(refreshResult);

		if (refreshResult?.data) {
			api.dispatch(setCredentials(refreshResult.data));
			localStorage.setItem('access_token', refreshResult?.data.access_token);
			localStorage.setItem('refresh_token', refreshResult?.data.refresh_token);
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	tagTypes: ['MyAds', 'AllAds'],
	baseQuery: baseQueryWithReauth,

	endpoints: builder => ({
		getAds: builder.query({
			query: () => `/ads`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'AllAds', id })),
							{ type: 'AllAds', id: 'LIST' },
					  ]
					: [{ type: 'AllAds', id: 'LIST' }],
		}),

		myAds: builder.query({
			query: () => {
				return {
					url: `/ads/me?`,
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				};
			},
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'MyAds', id })),
							{ type: 'MyAds', id: 'LIST' },
					  ]
					: [{ type: 'MyAds', id: 'LIST' }],
		}),

		postAd: builder.mutation({
			query: ({ title, description, price, files }) => {
				const formData = new FormData();
				formData.append('file', files);
				return {
					url: `/ads?title=${title}&description=${description}&price=${price}`,
					method: 'POST',
					body: formData,
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
			],
		}),
	}),
});

export const { useGetAdsQuery, usePostAdMutation, useMyAdsQuery } = apiSlice;
