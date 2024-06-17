import { addSession, deleteSession, getSession } from './api';

export const sessions = {
	async create(user) {
		const hash = Math.random().toFixed(50);

		await addSession(hash, user);

		return hash;
	},
	async remove(hash) {
		const dbSession = await getSession(hash);

		if (!dbSession) {
			return;
		}

		await deleteSession(dbSession.id);
	},
	async access(hash, accessRoles) {
		const dbSession = await getSession(hash);

		return !!dbSession?.user && accessRoles.includes(dbSession.user.roleId);
	},
};
