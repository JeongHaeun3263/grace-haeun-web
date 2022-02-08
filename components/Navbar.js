import Link from 'next/link';

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
		</nav>
	);
};

export default Navbar;
