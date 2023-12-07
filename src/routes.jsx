import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from './store/slices/loginSlice';
import { getUser } from './store/api/api';

export const AppRoutes = () => {
	
	const dispatch = useDispatch();
	const { tokens, userInfo } = useSelector(state => state.user);

	useEffect(() => {
		if (tokens) {
			(async () => {
				const userInfo = await getUser({ tokens });
				dispatch(getInfo(userInfo));
			})();
		}
	}, [dispatch, tokens]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute userInfo={userInfo} />}></Route>

				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage  />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
