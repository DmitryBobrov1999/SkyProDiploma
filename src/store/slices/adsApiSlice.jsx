// import { apiSlice } from '../api/rtkQueryApi';

// export const authApiSlice = apiSlice.injectEndpoints({
// 	tagTypes: ['AllAds'],
// 	endpoints: builder => ({
// 		getAds: builder.query({
// 			query: () => `/ads`,
// 		}),
// 		providesTags: result =>
// 			result
// 				? [
// 						...result.map(({ id }) => ({ type: 'AllAds', id })),
// 						{ type: 'AllAds', id: 'LIST' },
// 				  ]
// 				: [{ type: 'AllAds', id: 'LIST' }],
// 	}),
// });

// export const { useGetAdsQuery } = authApiSlice;
