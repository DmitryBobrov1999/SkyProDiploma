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

	if (result.error && result.error.status === 401) {
		

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
		
		if (refreshResult?.data) {
			api.dispatch(setCredentials(refreshResult.data));
			localStorage.setItem('access_token', refreshResult.data.access_token);
			localStorage.setItem('refresh_token', refreshResult.data.refresh_token);
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({}),
});



// export const skyProApi = createApi({
// 	reducerPath: 'skyProApi',
// 	tagTypes: ['Ads', 'User'],
// 	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
// 	prepareHeaders: (headers, { getState }) => {
// 		const token = getState().auth.token
// 		if(token) {
// 			headers.set('Authorization', `Bearer ${token}`)
// 		}
// 		return headers
// 	},
// 	endpoints: build => ({
// 		getAllAds: build.query({
// 			query: () => `ads`,
// 			providesTags: result =>
// 				result
// 					? [
// 							...result.map(({ id }) => ({ type: 'Ads', id })),
// 							{ type: 'Ads', id: 'LIST' },
// 					  ]
// 					: [{ type: 'Ads', id: 'LIST' }],
// 		}),
// 		getUser: build.mutation({
// 			query: ({ accessToken }) => ({
// 				url: 'user',
// 				method: 'GET',
// 				headers: {
// 					Authorization: `Bearer ${accessToken}`,
// 				},
// 			}),
// 		}),

// 		login: build.mutation({
// 			query: body => ({
// 				url: 'auth/login',
// 				method: 'POST',
// 				body,
// 			}),

// 		}),
// 	}),
// });

// export const { useGetAllAdsQuery, useLoginMutation, useGetUserMutation } =
// 	skyProApi;
