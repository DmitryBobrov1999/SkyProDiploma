import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		changeAvatar: builder.mutation({
			query: ({ file }) => {
				const formData = new FormData();
				formData.append('file', file);
				return {
					url: '/user/avatar',
					method: 'POST',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
					body: formData,
				};
			},
		}),
	}),
});

export const { useChangeAvatarMutation } = authApiSlice;
