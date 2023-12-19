import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProfilePage } from './pages/profilePage/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import myApi from './store/slices/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  setCredentials } from './store/slices/authSlice';
import { AdPage } from './pages/AdPage/AdPage';

export const AppRoutes = () => {

	const [token, setToken] = useState(localStorage.getItem('access_token'));

	const dispatch = useDispatch();

	const { data: user } = myApi.useGetUserQuery();
	const { token: selectorToken } = useSelector(state => state.auth);
	
	useEffect(() => {
		const token = localStorage.getItem('access_token');
		setToken(selectorToken);
		dispatch(setCredentials(token));

	}, [dispatch, selectorToken]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute token={token} />}>
					<Route path='/profile' element={<ProfilePage user={user} />} />
				</Route>

				<Route path='/' element={<MainPage token={token} />} />
				<Route path='/ad/:id' element={<AdPage token={token} />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
