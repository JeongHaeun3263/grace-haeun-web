import Head from 'next/head';
import { Fragment } from 'react';
import { getAllBlogPosts } from '../../lib/api';
import Card from '../../components/Card';
import styles from '../../styles/Blog.module.css';

const Blog = ({ posts }) => {
	return (
		<Fragment>
			<Head>
				<title>GRACE | BLOG</title>
				<meta name='keywords' content='grace web developer website' />
			</Head>
			<div className={styles.blog}>
				{posts.map((post) => (
					<Card post={post} />
				))}
			</div>
		</Fragment>
	);
};

export default Blog;

export const getStaticProps = async () => {
	const posts = await getAllBlogPosts();
	return {
		props: {
			posts,
		},
	};
};
