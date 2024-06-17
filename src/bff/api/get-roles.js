export const getRoles = () =>
	fetch('http://localhost:3000/roles', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).then((loadedRoles) => loadedRoles.json());
