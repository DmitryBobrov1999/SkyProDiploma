import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProfilePage } from './pages/profilePage/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import myApi from './store/slices/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store/slices/authSlice';

export const AppRoutes = () => {
	const [userInfo, setUserInfo] = useState(null);
	const token = localStorage.getItem('access_token');
	const dispatch = useDispatch()
	
	const { data: info } = myApi.useGetUserQuery();
	
	useEffect(() => {
		setUserInfo(info);
		dispatch(getUser(info));
	}, [info, dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute token={token} />}>
					<Route
						path='/profile'
						element={<ProfilePage userInfo={userInfo} />}
					/>
				</Route>

				<Route
					path='/'
					element={<MainPage setUserInfo={setUserInfo} token={token} />}
				/>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
