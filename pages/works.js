import Head from 'next/head';
import { Fragment } from 'react';
import WorkItem from '../components/WorkItem';
import { getAllProjects } from '../lib/api';

const About = ({ works }) => {
	return (
		<Fragment>
			<Head>
				<title>GRACE | WORKS</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>

			<div className='works'>
				{works.map((work) => (
					<WorkItem work={work} key={work.title} />
				))}
			</div>
		</Fragment>
	);
};

export default About;

export const getStaticProps = async () => {
	const works = await getAllProjects();
	return {
		props: {
			works,
		},
	};
};
