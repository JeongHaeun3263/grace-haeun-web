import Head from 'next/head';
import { Fragment } from 'react';
import { getAllBlogPosts } from '../../lib/api';
import Card from '../../components/Card';
import styles from '../../styles/Blog.module.css';
import { useGetBlogs } from '../../actions';

const Blog = ({ posts: initialData }) => {
	const { data: posts, error } = useGetBlogs(initialData);

	return (
		<Fragment>
			<Head>
				<title>GRACE | BLOG</title>
				<meta name='keywords' content='grace front end developer website' />
			</Head>

			<div className='blog'>
				{posts.map((post) => (
					<Card key={post.slug} post={post} />
				))}
			</div>
		</Fragment>
	);
};

export default Blog;

export async function getStaticProps() {
	const posts = await getAllBlogPosts();
	return {
		props: {
			posts,
		},
		revalidate: 1,
	};
}
