import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3000/posts')
		.then((loadedPosts) => loadedPosts.json())
		.then((dbPosts) => dbPosts && dbPosts.map(transformPost));
