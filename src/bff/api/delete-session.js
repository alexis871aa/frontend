export const deleteSession = async (sessionId) => {
	await fetch(`http://localhost:3000/sessions/${sessionId}`, {
		method: 'DELETE',
	});
};
