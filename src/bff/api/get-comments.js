import { transformComment } from '../transformers';

export const getComments = async (postId) =>
	fetch(`http://localhost:3000/comments?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments && loadedComments.map(transformComment));