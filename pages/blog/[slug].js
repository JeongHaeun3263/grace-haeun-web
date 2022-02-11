import { getAllBlogPosts, getSinglePostBySlug } from '../../lib/api';
import styles from '../../styles/SinglePost.module.css';

const SinglePost = ({ singlePost }) => {
	return (
		<article className={styles.post}>
			<h1 className={styles.title}>{singlePost.title}</h1>
			<h2 className={styles.subtitle}>{singlePost.subtitle}</h2>
			<br />
			<img className={styles.main__image} src={singlePost.coverImage} />
			<br />
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
