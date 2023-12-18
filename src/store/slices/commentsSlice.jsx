import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		comments: builder.query({
			query: ({id}) => `ads/${id}/comments`,
		}),
	}),
});

export const { useCommentsQuery } = authApiSlice;
