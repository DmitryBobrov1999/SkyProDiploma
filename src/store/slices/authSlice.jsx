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
	
	},
});

export const { setCredentials, setUrlImages } = authSlice.actions;

export default authSlice.reducer;
