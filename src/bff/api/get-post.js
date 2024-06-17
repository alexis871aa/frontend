import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`http://localhost:3000/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			let error = '';

			switch (res.status) {
				case 404:
					error = 'Такая страница не существует';
					break;
				default:
					error = 'Что-то пошло не так. Попробуйте ещё раз позднее';
					break;
			}

			return Promise.reject(error);
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
