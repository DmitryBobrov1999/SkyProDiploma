import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';

import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from './store/slices/loginSlice';
import { getUser, updateUser } from './store/api/api';
import { ProfilePage } from './pages/profilePage/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';

export const AppRoutes = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector(state => state.user);

	useEffect(() => {
		if (userInfo) {
			const timer = setInterval(async () => {
				const getToken = localStorage.getItem('access_token');
				const refreshToken = localStorage.getItem('refresh_token');
				if(getToken && refreshToken) {
					const data = await updateUser({ getToken, refreshToken });
					localStorage.setItem('access_token', data.access_token);
					localStorage.setItem('refresh_token', data.refresh_token);
					const userInfo = await getUser({ getToken });
					dispatch(getInfo(userInfo));
					clearInterval(timer);
				}
				clearInterval(timer);
			}, 60000);
		}
	}, [userInfo, dispatch]);

	useEffect(() => {
		const getToken = localStorage.getItem('access_token');
		if (getToken) {
			(async () => {
				const userInfo = await getUser({ getToken });
				dispatch(getInfo(userInfo));
			})();
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute userInfo={userInfo} />}>
					<Route path='/profile' element={<ProfilePage />} />
				</Route>

				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
