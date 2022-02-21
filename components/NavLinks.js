import Link from 'next/link';

const NavLinks = () => {
	return (
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
		</div>
	);
};

export default NavLinks;
