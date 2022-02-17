import { getAllBlogPosts } from '../../lib/api';

export default async function getBlogs(req, res) {
	const data = await getAllBlogPosts();
	res.status(200).json(data);
}
