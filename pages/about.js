import Head from 'next/head';

import { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<Head>
				<title>GRACE | About</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>

			<div>
				<h1>About</h1>
			</div>
		</Fragment>
	);
};

export default About;
