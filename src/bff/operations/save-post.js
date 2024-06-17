import { addPost, getPost, updatePost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';
import { getPostCommentsWithAuthor } from '../utils';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const postData =
		newPostData.id === ''
			? await addPost(newPostData)
			: await updatePost(newPostData);

	const post = await getPost(postData.id);

	const commentsWithAuthor = await getPostCommentsWithAuthor(postData.id);

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
