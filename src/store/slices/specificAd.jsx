import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		specificAd: builder.query({
			query: ({ id }) => `ads/${id}`,
		}),
	}),
});

export const { useSpecificAdQuery } = authApiSlice;
