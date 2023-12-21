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
