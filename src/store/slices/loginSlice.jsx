import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'login',
	initialState: {

		userInfo: null,

	},
	reducers: {

		logOut: (state, action) => {
			state.userInfo = null;
		},
		getInfo: (state, action) => {
			state.userInfo = action.payload;
		},

	},
});

export const { logOut, getInfo } = authSlice.actions;

export default authSlice.reducer;
