import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo, sendToken } from './store/slices/loginSlice';
import { getUser, updateUser } from './store/api/api';
import { ProfilePage } from './pages/profilePage/ProfilePage';

export const AppRoutes = () => {
	const dispatch = useDispatch();
	const { userInfo, userToken } = useSelector(state => state.user);

	useEffect(() => {
		const getToken = localStorage.getItem('access_token');
		const refreshToken = localStorage.getItem('refresh_token');
		if (getToken) {
			(async () => {
				const userInfo = await getUser({ getToken });
				dispatch(getInfo(userInfo));
			})();
		}
		if (userInfo?.detail) {
			(async () => {
				const data = await updateUser({ refreshToken, getToken });
				dispatch(sendToken(data));
				localStorage.setItem('access_token', data.access_token);
				localStorage.setItem('refresh_token', data.refresh_token);
			})();
		}
	}, [userToken, dispatch, userInfo?.detail]);

	return (
		<BrowserRouter>
			<Routes>
				
					<Route path='/profile' element={<ProfilePage />} />
				

				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
