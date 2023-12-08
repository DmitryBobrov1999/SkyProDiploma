import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'login',
	initialState: {

		userInfo: null,
		userToken: null,
	},
	reducers: {

		logOut: (state, action) => {
			state.userInfo = null;
		},
		getInfo: (state, action) => {
			state.userInfo = action.payload;
		},
		sendToken: (state, action) => {
			state.userToken = action.payload
		}
	},
});

export const { logOut, getInfo, sendToken } = authSlice.actions;

export default authSlice.reducer;
