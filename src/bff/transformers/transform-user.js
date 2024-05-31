export const transformUser = ({ id, login, password, register_at, role_id }) => ({
	id,
	login,
	password,
	registerAt: register_at,
	roleId: role_id,
});
