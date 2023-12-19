import { apiSlice } from '../api/rtkQueryApi';

export const authApiSlice = apiSlice.injectEndpoints({
	tagTypes: ['Comments'],
	endpoints: builder => ({
		comments: builder.query({
			query: ({ id }) => `ads/${id}/comments`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Comments', id })),
							{ type: 'Comments', id: 'LIST' },
					  ]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		addComment: builder.mutation({
			query: ({ specificAdInfo, text }) => ({
				url: `/ads/${specificAdInfo?.id}/comments`,
				method: 'POST',
				body: {
					text: text,
				},
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
		}),
	}),
});

export const { useCommentsQuery, useAddCommentMutation } = authApiSlice;
