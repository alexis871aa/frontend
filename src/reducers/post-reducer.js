import { ACTION_TYPE } from '../action';

export const initialPostState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
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
		case ACTION_TYPE.RESET_POST_DATA:
			return initialPostState;
		default:
			return state;
	}
};
