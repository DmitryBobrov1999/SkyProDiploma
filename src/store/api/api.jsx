import axios from 'axios';
import { useSelector } from 'react-redux';

export const regUser = async (
	email,
	password,
	repeatPassword,
	name,
	lastName,
	city
) => {
	const regUrl = 'http://localhost:8090/auth/register';

	axios
		.post(regUrl, {
			email: email,
			password: password,
			repeatPassword: repeatPassword,
			name: name,
			lastName: lastName,
			city: city,
		})
		.then(response => {
			return response;
		});
};

export const loginUser = async ({ email, password }) => {
	const logUrl = 'http://localhost:8090/auth/login';

	
	const response = await fetch(logUrl, {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password,
		}),
		headers: {
			'content-type': 'application/json',
		},
	});

	const data = await response.json();

	return data
};

export const getUser = async ({ getToken }) => {
	const getUrl = 'http://localhost:8090/user';

	const response = await fetch(getUrl, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${getToken}`,
		},
	});

	const userInfo = await response.json();
	return userInfo;
};

export const updateUser = async ({ refreshToken, getToken }) => {
	const updateUrl = 'http://localhost:8090/auth/login';

	const response = await fetch(updateUrl, {
		method: 'PUT',
		body: JSON.stringify({
			access_token: `${getToken}`,
			refresh_token: `${refreshToken}`,
		}),
		headers: {
			'content-type': 'application/json',
		},
	});

	const data = await response.json();
	
	return data;
};
