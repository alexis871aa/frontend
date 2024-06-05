import { getComments, getPost, getUsers, updatePost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await updatePost(newPostData);

	const post = await getPost(newPostData.id);

	const comments = await getComments(newPostData.id);

	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
