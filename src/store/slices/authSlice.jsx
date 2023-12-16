import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
	},
	reducers: {
		setCredentials: (state, action) => {
			state.token = action.payload;
		},
		logOut: (state, action) => {
			state.user = null;
			state.token = null;
		},
		getUser: (state, action) => {
			state.user = action.payload
		}
	},
});

export const { setCredentials, logOut, getUser } = authSlice.actions;

export default authSlice.reducer;
