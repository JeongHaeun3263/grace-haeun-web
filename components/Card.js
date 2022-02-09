import styles from '../styles/Card.module.css';

const Card = ({ post }) => {
	return (
		<div className={styles.card}>
			<img className={styles.coverImage} src={post.coverImage} />
			<div className={styles.textbox}>
				<h1 className={styles.title}>{post.title}</h1>
				<h2 className={styles.subtitle}>{post.subtitle}</h2>
				<div className={styles.author}>
					<img className={styles.avatar} src={post.author?.avatar} />
					<span className={styles.fullname}>{post.author?.fullname}</span>
				</div>
				<p className={styles.date}>{post.date}</p>
			</div>
		</div>
	);
};

export default Card;
