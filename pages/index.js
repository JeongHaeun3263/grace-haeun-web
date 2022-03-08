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
				<meta name='keywords' content='Grace Web Front End Developer' />
			</Head>
			<div className={styles.hero}>
				<h1 className={styles.title}>I am Grace</h1>
				<h3 className={styles.subtitle}>A Front End Web Developer</h3>
			</div>
			<div className={styles.main}>
				<section className={styles.section}>
					<Image
						src='/web.png'
						width={650}
						height={500}
						alt='a developer is wokring on a web application'
					/>
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
						<h1>I keep learning to improve my skills</h1>
						<p>
							I write blog posts about what I learn and would love to share with
							people.
						</p>
						<Link href='/blog' className={styles.btn}>
							<a className={styles.btn}>Read My Blog</a>
						</Link>
					</div>
					<Image
						src='/learinng.png'
						width={650}
						height={500}
						alt='a developer is learning new technologies'
					/>
				</section>
			</div>
		</Fragment>
	);
}
