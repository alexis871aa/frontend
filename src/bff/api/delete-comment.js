export const deleteComment = (id) =>
	fetch(`http://localhost:3000/comments/${id}`, {
		method: 'DELETE',
	});
