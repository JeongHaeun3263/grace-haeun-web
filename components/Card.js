import Link from 'next/link';
import styles from '../styles/Card.module.css';
import { urlFor } from '../lib/api';

const Card = ({ post }) => {
	return (
		<Link href='/blog/[slug]' as={`/blog/${post.slug}`}>
			<div className={styles.card}>
				<img
					className={styles.coverImage}
					src={urlFor(post.coverImage)
						.height(267)
						.crop('center')
						.fit('clip')
						.url()}
				/>
				<div className={styles.textbox}>
					<h1 className={styles.title}>{post.title}</h1>
					<h2 className={styles.subtitle}>{post.subtitle}</h2>
					<div className={styles.author}>
						<img
							className={styles.avatar}
							src={urlFor(post.author?.avatar).height(50)}
						/>
						<span className={styles.fullname}>{post.author?.fullname}</span>
					</div>
					<p className={styles.date}>{post.date}</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
