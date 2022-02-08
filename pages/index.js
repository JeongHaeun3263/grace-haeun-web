import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Fragment } from 'react/cjs/react.production.min';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GRACE | Home</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>I am Grace</p>
				<p className={styles.text}>a web developer</p>
			</div>
		</Fragment>
	);
}
