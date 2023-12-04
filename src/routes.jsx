import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './components/pages/MainPage/MainPage';

export const AppRoutes = () => {
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<MainPage />} />
		</Routes>
	</BrowserRouter>;
};
