import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GRACE | HOME</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>
			<div className={styles.hero}>
				<p className={styles.text}>Hi there,</p>
				<h1 className={styles.title}>I am Grace</h1>
				<h3 className={styles.subtitle}>a FRONT END WEB developer</h3>
			</div>
			<div className={styles.about}>
				<section className={styles.section}>
					<Image src='/web.png' width={650} height={500} />

					<div className={styles.textbox}>
						<h1>I have a passion for creating web applications</h1>
						<p>
							I enjoy working with Front End technologies such as HTML5, CSS3,
							JavaScript, React and much more!
						</p>
						<Link href='/works' className={styles.btn}>
							<a className={styles.btn}>See My Works</a>
						</Link>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.textbox}>
						<h1>I always learn and improve my skills</h1>
						<p>
							I write blog posts about what I learn and would love to share with
							people.
						</p>
						<Link href='/blog' className={styles.btn}>
							<a className={styles.btn}>Read My Posts</a>
						</Link>
					</div>
					<Image src='/idea.png' width={650} height={500} />
				</section>
			</div>
		</Fragment>
	);
}
