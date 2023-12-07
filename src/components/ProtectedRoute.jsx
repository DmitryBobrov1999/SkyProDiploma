import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ userInfo }) => {
	if (!userInfo) {
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
