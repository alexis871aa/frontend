export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registerAt: dbUser.register_at,
	roleId: dbUser.role_id,
});
