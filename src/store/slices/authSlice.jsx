import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		urlFiles: [],
	},
	reducers: {
		setCredentials: (state, action) => {
			state.token = action.payload;
		},
		setUrlImages: (state, action) => {
			state.urlFiles.push(action.payload);
		},
		logOut: (state, action) => {
			state.token = null;
		},
	},
});

export const { setCredentials, setUrlImages, logOut } = authSlice.actions;

export default authSlice.reducer;
