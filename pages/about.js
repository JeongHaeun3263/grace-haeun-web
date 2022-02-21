import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../styles/About.module.css';

const About = () => {
	return (
		<Fragment>
			<Head>
				<title>GRACE | About</title>
				<meta name='keywords' content='front end web developer' />
			</Head>

			<section className={styles.about}></section>
		</Fragment>
	);
};

export default About;
