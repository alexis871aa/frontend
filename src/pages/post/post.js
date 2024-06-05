import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { initialPostState } from '../../reducers';
import { Comments, PostContent, PostForm } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../action';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={isCreating ? initialPostState : post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 40px 80px;
`;
