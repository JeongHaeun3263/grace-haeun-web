import { urlFor } from '../lib/api';

import styles from '../styles/BlogHeader.module.css';

const BlogHeader = ({ singlePost }) => {
	return (
		<header>
			<div className={styles.header__top}>
				<div className={styles.author}>
					<img
						alt='Avatar'
						className={styles.avatar}
						src={singlePost.author?.avatar}
					/>
					<span className={styles.fullname}>{singlePost.author?.fullname}</span>
				</div>
				<div>
					<p className={styles.date}>{singlePost.date}</p>
				</div>
			</div>
			<div>
				<h1 className={styles.title}>{singlePost.title}</h1>
				<h2 className={styles.subtitle}>{singlePost.subtitle}</h2>

				<img
					alt='Cover Image'
					className={styles.main__image}
					src={urlFor(singlePost.coverImage).width(800).url()}
				/>
			</div>
		</header>
	);
};

export default BlogHeader;
