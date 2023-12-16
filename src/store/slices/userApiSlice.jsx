import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query({
			query: () => ({
				url: 'user',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			}),
		}),
	}),
});

export default authApiSlice;
