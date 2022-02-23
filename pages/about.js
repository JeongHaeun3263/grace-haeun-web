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
						src='/profile.png'
						width={300}
						height={300}
						alt='Profile'
					/>
				</div>

				<div className={styles.textbox}>
					<h1>Hi there,</h1>
					<h2>My name is Grace.</h2>
					<p>
						I’m a front-end developer. I have a passion for web & software
						development and I especially enjoy working with front-end
						technologies.
					</p>
					<p>
						Each day, I try to learn something new and expand my knowledge of
						programming. My goal is to rub elbows with the big boys, and I come
						close to getting there every time I master a pogromming skill.
					</p>
					<p>
						I am also a people person, and I very much enjoy interacting and
						collaborating with others to produce exciting new things.
					</p>
					<p>
						In my free time, I love finding new places to eat and drink; I
						equally relish in exploring the nooks and crannies of Toronto, but I
						especially indulge in discovering the natural beauty of Ontrio.
					</p>
					<p>
						And even though I’ve been places, I often fantasize about seeing the
						world.
					</p>
					<p className={styles.signature}>Grace</p>
				</div>
			</section>
		</Fragment>
	);
};

export default About;
