import { transformUser } from '../transformers';

export const getUsers = () =>
	fetch('http://localhost:3000/users')
		.then((loadedUsers) => loadedUsers.json())
		.then((dbUsers) => dbUsers && dbUsers.map(transformUser));
