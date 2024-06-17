export const transformPost = ({ id, title, image_url, content, published_at }) => ({
	id,
	title,
	imageUrl: image_url,
	content,
	publishedAt: published_at,
});
