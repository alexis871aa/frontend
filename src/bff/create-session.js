import { removeComment } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN:
			session.removeComments = removeComment;
			break;
		case ROLE.MODERATOR:
			session.removeComments = removeComment;
			break;
		case ROLE.READER:
			break;
		default:
		// ничего не делать
	}

	return session;
};
