import Link from 'next/link';
import { FaLinkedinIn, FaGithubAlt, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav>
			<div className='nav__container'>
				<Link href='/'>
					<a className='logo'>GRACE</a>
				</Link>
				<div className='links'>
					<Link href='/'>
						<a>Home</a>
					</Link>
					<Link href='/about'>
						<a>About</a>
					</Link>
					<Link href='/works'>
						<a>Works</a>
					</Link>
					<Link href='/blog'>
						<a>Blog</a>
					</Link>
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
						<a
							href='https://twitter.com/jhe3263'
							target='_blank'
							rel='noreferrer'
						>
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
