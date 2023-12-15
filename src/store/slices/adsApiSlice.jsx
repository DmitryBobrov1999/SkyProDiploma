import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		allAds: builder.query({
			query: () => `ads`,
		}),
	}),
});

export const { useAllAdsQuery } = authApiSlice;
