import { ACTION_TYPE } from '../action';

const initialPostState = {
	id: null,
	title: null,
	imageUrl: null,
	content: null,
	publishedAt: null,
	comments: [],
};

export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST_DATA:
			return {
				...state.post,
				...action.payload,
			};
		case ACTION_TYPE.SET_COMMENTS_DATA:
			return {
				...state.post,
				comments: { ...state.post.comments, ...action.payload },
			};
		default:
			return state;
	}
};
