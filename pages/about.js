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

			<section className={styles.about}>
				<div className={styles.profilebox}>
					<Image
						className={styles.profile}
						src='/profile.jpeg'
						width={300}
						height={300}
						alt='Profile'
					/>
				</div>

				<div className={styles.textbox}>
					<h1>Hi there,</h1>
					<h2>My name is Grace.</h2>
					<p>
						I am a Front End Web Developer. I have a passion for web development
						and I especially enjoy working with front end technologies.
					</p>
					<p>I like interacting with people and inspiring each other.</p>
					<p>
						I love exploring new places, breathtaking nature, and amazing food
						around the world. I have traveled to 7+ countries, 20+ cities!
					</p>
				</div>
			</section>
		</Fragment>
	);
};

export default About;
