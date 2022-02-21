import { FaLinkedinIn, FaGithubAlt, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
	return (
		<div className='icons'>
			<a
				href='https://github.com/jeonghaeun3263'
				target='_blank'
				rel='noreferrer'
			>
				<FaGithubAlt />
			</a>
			<a
				href='https://www.linkedin.com/in/haeunjeong/'
				target='_blank'
				rel='noreferrer'
			>
				<FaLinkedinIn />
			</a>
			<a href='https://twitter.com/jhe3263' target='_blank' rel='noreferrer'>
				<FaTwitter />
			</a>
		</div>
	);
};

export default SocialIcons;
