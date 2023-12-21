import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		postAd: builder.mutation({
			query: ({ title, description, price, files }) => {
				const formData = new FormData();
				formData.append('file', files);
				return {
					url: `/ads?title=${title}&description=${description}&price=${price}`,
					method: 'POST',
					body: formData,
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				};
			},
		}),
	}),
});

export const { usePostAdMutation } = authApiSlice;
