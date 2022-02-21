import { getAllBlogPosts, getSinglePostBySlug } from '../../lib/api';
import styles from '../../styles/SinglePost.module.css';
import BlogContent from '../../components/BlogContent';
import BlogHeader from '../../components/BlogHeader';
import PreviewAlert from '../../components/PreviewAlert';

const SinglePost = ({ singlePost, preview }) => {
	return (
		<article className={styles.post}>
			{preview && <PreviewAlert />}
			<BlogHeader singlePost={singlePost} />
			<BlogContent content={singlePost.content} />
		</article>
	);
};

export async function getStaticProps({ params, preview = false, previewData }) {
	const singlePost = await getSinglePostBySlug(params.slug, preview);
	return {
		props: { singlePost, preview },
		revalidate: 1,
	};
}

export async function getStaticPaths() {
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
}

export default SinglePost;
