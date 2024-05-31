import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../action';
import { selectUserId } from '../../../../selectors';
import { Icon } from '../../../../components';
import { Comment } from './components';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (requestServer, userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => {
						setNewComment(target.value);
					}}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 0 0 5px"
					size="18px"
					onClick={() => {
						onNewCommentAdd(requestServer, userId, postId, newComment);
					}}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 10px auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& textarea {
		width: 100%;
		height: 120px;
		font-size: 18px;
		resize: none;
		padding: 5px;
	}
`;
