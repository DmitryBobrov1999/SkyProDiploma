import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ getToken }) => {
	if (!getToken || getToken === `undefined`) {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
