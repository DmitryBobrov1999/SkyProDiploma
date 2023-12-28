// import { apiSlice } from './apiSlice';

// export const authApiSlice = apiSlice.injectEndpoints({
// 	tagTypes: ['SellerAds'],
// 	endpoints: builder => ({
// 		sellerAds: builder.query({
// 			query: ({ user_id }) => `/ads?user_id=${user_id}`,
// 		}),
// 		providesTags: result =>
// 			result
// 				? [
// 						...result.map(({ id }) => ({ type: 'SellerAds', id })),
// 						{ type: 'SellerAds', id: 'LIST' },
// 				  ]
// 				: [{ type: 'SellerAds', id: 'LIST' }],
// 	}),
// });

// export const { useSellerAdsQuery } = authApiSlice;
