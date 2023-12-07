import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'login',
	initialState: {
		tokens: null,
		userInfo: null,
	},
	reducers: {
		setTokens: (state, action) => {
			state.tokens = action.payload;
		},
		logOut: (state, action) => {
			state.tokens = null;
			state.userInfo = null;
		},
		getInfo: (state, action) => {
			state.userInfo = action.payload;
		},
	},
});

export const { setTokens, logOut, getInfo } = authSlice.actions;

export default authSlice.reducer;
