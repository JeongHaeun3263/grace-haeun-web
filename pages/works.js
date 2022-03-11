import Head from 'next/head';
import { Fragment } from 'react';
import WorkItem from '../components/WorkItem';

const Work = () => {
	const works = [
		{
			id: 3,
			title: 'Expense Tracker',
			img: 'expense_tracker',
			tags: ['React', 'Redux'],
			githubUrl: 'https://github.com/JeongHaeun3263/expense-tracker',
			liveUrl: 'https://jeonghaeun3263.github.io/expense-tracker/',
		},
		{
			id: 1,
			title: 'Card Maker',
			img: 'card_maker',
			tags: ['React', 'Firebase', 'postCSS'],
			githubUrl: 'https://github.com/JeongHaeun3263/card-maker',
			liveUrl: 'https://grace-business-card.netlify.app/',
		},
		{
			id: 2,
			title: 'To Do List',
			img: 'to_do_list',
			tags: ['JavaScript', 'CSS'],
			githubUrl: 'https://github.com/JeongHaeun3263/todo-list',
			liveUrl: 'https://jeonghaeun3263.github.io/todo-list/',
		},
	];
	return (
		<Fragment>
			<Head>
				<title>GRACE | WORKS</title>
				<meta name='keywords' content='react' />
			</Head>

			<div className='works'>
				<h2>Front End</h2>
				{works.map((work) => (
					<WorkItem work={work} key={work.id} />
				))}
			</div>
		</Fragment>
	);
};

export default Work;
