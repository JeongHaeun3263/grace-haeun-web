import Head from 'next/head';

import { Fragment } from 'react';

const Blog = () => {
	return (
		<Fragment>
			<Head>
				<title>GRACE | blog</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>

			<div>
				<h1>Blog</h1>
			</div>
		</Fragment>
	);
};

export default Blog;
