import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const CommentContainer = ({ className, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							margin="0 5px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						<b>{author}</b>
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							margin="0 5px 0 5px"
							size="18px"
							onClick={() => {}}
						/>
						<b>{publishedAt}</b>
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id="fa-trash-o" margin="0 0 0 9px" size="18px" onClick={() => {}} />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;

	& .comment {
		width: 100%;
		padding: 5px 10px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: left;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
