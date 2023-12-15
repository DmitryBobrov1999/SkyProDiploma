import { apiSlice } from "../api/rtkQueryApi"; 

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		updateLogin: builder.mutation({
			query: credentials => ({
				url: '/auth/login',
				method: 'PUT',
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useUpdateLoginMutation } = authApiSlice;
