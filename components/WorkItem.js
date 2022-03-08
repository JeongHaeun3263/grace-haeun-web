import Image from 'next/image';
import { FaCode, FaDesktop } from 'react-icons/fa';
import styles from '../styles/WorkItem.module.css';

const WorkItem = ({ work }) => {
	return (
		<div className={styles.work}>
			<a href={work.liveUrl} target='_blank' rel='noreferrer'>
				<Image
					src={`/${work.img}.png`}
					alt='Project Image'
					width={700}
					height={400}
				/>
			</a>

			<div className={styles.textbox}>
				<h1 className={styles.title}>{work.title}</h1>
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
				<p className={styles.tags}>
					{work.tags.map((tag, i) => (
						<span key={i} className={styles.tag}>
							{tag}{' '}
						</span>
					))}
				</p>
			</div>
		</div>
	);
};

export default WorkItem;
