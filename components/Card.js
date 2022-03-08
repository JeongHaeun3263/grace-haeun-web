import Link from 'next/link';
import { urlFor } from '../lib/api';
import styles from '../styles/Card.module.css';

const Card = ({ post }) => {
	return (
		<Link href='/blog/[slug]' as={`/blog/${post.slug}`}>
			<div className={styles.card}>
				<div className={styles.imgbox}>
					<img
						alt='Cover Image'
						className={styles.cover__image}
						src={urlFor(post.coverImage).height(245).url()}
					/>
				</div>
				<div className={styles.textbox}>
					<h1 className={styles.title}>
						{post.title.lenght > 40
							? post.title.substr(0, 40) + '...'
							: post.title}
					</h1>
					<h2 className={styles.subtitle}>
						{post.subtitle.lenght > 40
							? post.subtitle.substr(0, 40) + '...'
							: post.subtitle}
					</h2>
					<p className={styles.date}>{post.date}</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
