import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<h1>GRACE</h1>
			</div>
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
				<a href='https://www.linkedin.com/in/haeunjeong/' target='_blank'>
					<FaLinkedin />
				</a>
				<a href='https://github.com/jeonghaeun3263' target='_blank'>
					<FaGithubSquare />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
