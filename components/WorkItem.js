import { FaCode, FaDesktop } from 'react-icons/fa';
import styles from '../styles/WorkItem.module.css';

const WorkItem = ({ work }) => {
	return (
		<div className={styles.work}>
			<a href={work.liveUrl} target='_blank' rel='noreferrer'>
				<img src={work.projectImage} alt='Project Image' />
			</a>

			<div className={styles.textbox}>
				<h1 className={styles.title}>{work.title}</h1>
				<p className={styles.description}>{work.description || ''}</p>
				<div className={styles.links}>
					<span>
						<a href={work.githubUrl} target='_blank' rel='noreferrer'>
							<FaCode className={styles.icon} />
						</a>
					</span>
					<span>
						<a href={work.liveUrl} target='_blank' rel='noreferrer'>
							<FaDesktop className={styles.icon} />
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default WorkItem;
