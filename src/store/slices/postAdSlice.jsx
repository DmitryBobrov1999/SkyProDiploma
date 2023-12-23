// import { apiSlice } from '../api/rtkQueryApi';

// export const authApiSlice = apiSlice.injectEndpoints({
// 	tagTypes: ['MyAds'],
// 	endpoints: builder => ({
// 		// myAds: builder.query({
// 		// 	query: () => {
// 		// 		return {
// 		// 			url: `/ads/me?`,
// 		// 			headers: {
// 		// 				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
// 		// 			},
// 		// 		};
// 		// 	},
// 		// }),
// 		// providesTags: result =>
// 		// 	result
// 		// 		? [
// 		// 				...result.map(({ id }) => ({ type: 'MyAds', id })),
// 		// 				{ type: 'MyAds', id: 'LIST' },
// 		// 		  ]
// 		// 		: [{ type: 'MyAds', id: 'LIST' }],
// 		// postAd: builder.mutation({
// 		// 	query: ({ title, description, price, files }) => {
// 		// 		const formData = new FormData();
// 		// 		formData.append('file', files);
// 		// 		return {
// 		// 			url: `/ads?title=${title}&description=${description}&price=${price}`,
// 		// 			method: 'POST',
// 		// 			body: formData,
// 		// 			headers: {
// 		// 				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
// 		// 			},
// 		// 		};
// 		// 	},
// 		// 	invalidatesTags: [{ type: 'AllAds', id: 'LIST' }],
// 		// }),
// 		// deleteAd: builder.mutation({
// 		// 	query: ({ specificAd }) => {
// 		// 		return {
// 		// 			url: `/ads/${specificAd.id}`,
// 		// 			method: 'DELETE',
// 		// 			headers: {
// 		// 				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
// 		// 			},
// 		// 		};
// 		// 	},
// 		// 	invalidatesTags: [{ type: 'MyAds', id: 'LIST' }],
// 		// }),
// 	}),
// });

// export const { usePostAdMutation, useLazyMyAdsQuery, useDeleteAdMutation } =
// 	authApiSlice;
