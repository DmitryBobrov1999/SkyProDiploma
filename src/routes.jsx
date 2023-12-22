import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProfilePage } from './pages/profilePage/MyProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import myApi from './store/slices/userApiSlice';


import { AdPage } from './pages/AdPage/AdPage';
import { SellerProfilePage } from './pages/sellerProfilePage/SellerProfilePage';

export const AppRoutes = () => {
	const [token, setToken] = useState(localStorage.getItem('access_token'));

	const { data: user, isLoading, isSuccess } = myApi.useGetUserQuery();

	useEffect(() => {
		const token = localStorage.getItem('access_token');
		setToken(token);
		localStorage.setItem('myId', user?.id);
	}, [user?.id]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute token={token} />}>
					<Route
						path='/profile'
						element={
							<ProfilePage
								isSuccess={isSuccess}
								user={user}
								isLoading={isLoading}
							/>
						}
					/>
				</Route>

				<Route path='/' element={<MainPage token={token} />} />
				<Route path='/seller/:id' element={<AdPage token={token} />} />
				<Route
					path='/seller/:id/:user_id'
					element={<SellerProfilePage token={token} />}
				/>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
