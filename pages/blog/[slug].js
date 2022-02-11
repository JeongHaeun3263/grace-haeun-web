import { getAllBlogPosts, getSinglePostBySlug } from '../../lib/api';
import styles from '../../styles/SinglePost.module.css';
import BlogContent from '../../components/BlogContent';
import BlogHeader from '../../components/BlogHeader';

const SinglePost = ({ singlePost }) => {
	return (
		<article className={styles.post}>
			<BlogHeader singlePost={singlePost} />
			<BlogContent content={singlePost.content} />
		</article>
	);
};

export const getStaticProps = async ({ params }) => {
	const singlePost = await getSinglePostBySlug(params.slug);
	return {
		props: { singlePost },
	};
};

export const getStaticPaths = async () => {
	const allPosts = await getAllBlogPosts();
	const paths = allPosts?.map((post) => ({
		params: {
			slug: post.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default SinglePost;
