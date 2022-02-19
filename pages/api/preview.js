import { getSinglePostBySlug } from '../../lib/api';

export default async function enablePreview(req, res) {
	if (
		req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
		!req.query.slug
	) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	const post = await getSinglePostBySlug(req.query.slug);

	if (!post) {
		return res.status(401).json({ message: 'Invalid slug' });
	}

	// setPreviewData will set cookies into your browser
	res.setPreviewData({});
	res.writeHead(307, { Location: `/blog/${post.slug}` });
	res.end();
}
