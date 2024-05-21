// Что здесь должно быть? Какая роль нашего прокси bff

// Backend for Frontend (BFF) должен нам обеспечивать авторизацию пользователя, а также регистрацию пользователя
// BFF также должен поддерживать текущую сессию пользователя - того, который авторизовался

// Таким образом, через BFF будут проходить запросы на авторизацию, регистрацию и все остальные запросы, которые имеют какие-то ограничения по ролям пользователя:
// - запрос на добавление новой статьи или редактирования статьи
// - удаление комментария

// Эти действия предназначены не для любого пользователя - гость и читатель не должен это делать! То есть прежде, чем делать эти действия нам необходимо проверить роль пользователя, который это запросил сделать и если эта роль удовлетворяет требованиям, то совершить это действие - роль у пользователя должна быть - регистратор или модератор.

import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from '../sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const existedUser = await getUser(regLogin);

		if (existedUser) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		const user = await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
