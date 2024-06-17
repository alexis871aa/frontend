export const transformComment = ({ id, author_id, post_id, published_at, content }) => ({
	id,
	authorId: author_id,
	postId: post_id,
	publishedAt: published_at,
	content,
});
