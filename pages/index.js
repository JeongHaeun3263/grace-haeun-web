import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { FaDesktop, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GRACE | HOME</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>
			<div className={styles.hero}>
				<h3 className={styles.text}>Hi there,</h3>
				<h1 className={styles.title}>I am Grace</h1>
			</div>
			<div className={styles.about}>
				<section className={styles.section}>
					<div className={styles.imgbox}>
						<img src='https://via.placeholder.com/300/333' />
					</div>
					<div className={styles.textbox}>
						<h1>I have passion for creating web applications</h1>
						<p>
							I enjoy working with Front End technologies such as HTML5, CSS3,
							JavaScript, and React
						</p>
						<Link href='/works'>
							<a className={styles.link}>Go To See My Works</a>
						</Link>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.textbox}>
						<h1>I love sharing my learning journey with people</h1>
						<p>
							I enjoy working with Front End technologies such as HTML5, CSS3,
							JavaScript, and React
						</p>
						<Link href='/blog'>
							<a className={styles.link}>Go To Read My Posts</a>
						</Link>
					</div>
					<div className={styles.imgbox}>
						<img src='https://via.placeholder.com/300.png/333' />
					</div>
				</section>
			</div>
		</Fragment>
	);
}
