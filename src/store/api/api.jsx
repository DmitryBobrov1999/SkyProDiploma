const baseUrl = 'http://localhost:8090/';

export const regUser = async (
	email,
	password,
	repeatPassword,
	name,
	surname,
	city
) => {
	const regUrl = `${baseUrl}auth/register`;

	const response = await fetch(regUrl, {
		body: JSON.stringify({
			email: email,
			password: password,
			repeatPassword: repeatPassword,
			name: name,
			surname: surname,
			city: city,
		}),
		headers: {
			'content-type': 'application/json',
		},
	});
	const data = await response.json();

	return data;
};

export const loginUser = async ({ email, password }) => {
	const logUrl = `${baseUrl}auth/login`;

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

	return data;
};

export const getUser = async ({ getToken }) => {
	const getUrl = `${baseUrl}user`;

	const response = await fetch(getUrl, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${getToken}`,
		},
	});

	const userInfo = await response.json();
	return userInfo;
};

export const updateUser = async ({ getToken, refreshToken }) => {
	const updateUrl = `${baseUrl}auth/login`;

	const response = await fetch(updateUrl, {
		method: 'PUT',
		body: JSON.stringify({
			access_token: getToken,
			refresh_token: refreshToken,
		}),
		headers: {
			'content-type': 'application/json',
		},
	});
	const data = await response.json();
	return data;
};

export const getAllAds = async () => {
	const allAdsUrl = `${baseUrl}ads`;

	const response = await fetch(allAdsUrl, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	});
	const data = await response.json();
	return data;
};

export const changeInfo = async ({ name, surname, phone, city, getToken }) => {
	const changeUrl = `${baseUrl}user`;
	phone = phone.toString()
	const response = await fetch(changeUrl, {
		method: 'PATCH',
		body: JSON.stringify({
			name: name,
			surname: surname,
			phone: phone,
			city: city,
		}),
		headers: {
			Authorization: `Bearer ${getToken}`,
			'content-type': 'application/json',
		},
	});
	const data = await response.json();
	return data;
};
