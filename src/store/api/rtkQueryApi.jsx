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
	tagTypes: ['MyAds', 'AllAds', 'SpecificAd', 'Comments'],
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
		specificAd: builder.query({
			query: ({ id }) => `/ads/${id}`,
			providesTags: result =>
				result
					? [
							({ id }) => ({ type: 'SpecificAd', id }),
							{ type: 'SpecificAd', id: 'LIST' },
					  ]
					: [{ type: 'SpecificAd', id: 'LIST' }],
		}),

		postAd: builder.mutation({
			query: ({ title, description, price }) => {
				return {
					url: `/adstext`,
					method: 'POST',
					body: {
						title,
						description,
						price,
					},
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		postImg: builder.mutation({
			query: ({ files, specificAd }) => {
				const formData = new FormData();
				formData.append('file', files);

				return {
					url: `/ads/${specificAd.id}/image`,
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
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		deleteImg: builder.mutation({
			query: ({ files, specificAd }) => {
				return {
					url: `/ads/${specificAd.id}/image?file_url=${files?.url}`,
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		deleteAd: builder.mutation({
			query: ({ specificAd }) => {
				return {
					url: `/ads/${specificAd.id}`,
					method: 'DELETE',
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

		editAd: builder.mutation({
			query: ({ title, description, price, specificAd }) => {
				return {
					url: `/ads/${specificAd.id}`,
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
					body: {
						title,
						description,
						price,
					},
				};
			},
			invalidatesTags: [{ type: 'SpecificAd', id: 'LIST' }],
		}),
		comments: builder.query({
			query: ({ id }) => `/ads/${id}/comments`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Comments', id })),
							{ type: 'Comments', id: 'LIST' },
					  ]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		addComment: builder.mutation({
			query: ({ specificAd, text }) => ({
				url: `/ads/${specificAd?.id}/comments`,
				method: 'POST',
				body: {
					text: text,
				},
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
		}),
	}),
});

export const {
	useGetAdsQuery,
	usePostAdMutation,
	useDeleteAdMutation,
	useMyAdsQuery,
	useSpecificAdQuery,
	useEditAdMutation,
	useCommentsQuery,
	useAddCommentMutation,
	usePostImgMutation,
	useDeleteImgMutation,
} = apiSlice;
