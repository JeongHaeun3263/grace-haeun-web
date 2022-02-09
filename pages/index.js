import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GRACE | HOME</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
			</div>
		</Fragment>
	);
}
