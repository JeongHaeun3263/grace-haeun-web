import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

const Navbar = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	const hanleMobileViewBtn = () => {
		setIsMobileView(!isMobileView);
	};

	return (
		<nav>
			<div className='navbar__container'>
				<div className='navbar__icon-container' onClick={hanleMobileViewBtn}>
					{isMobileView ? <FaTimes /> : <FaBars />}
				</div>

				<div className={isMobileView ? 'navbar__mobile' : 'navbar'}>
					<Link href='/'>
						<a className='logo'>GRACE</a>
					</Link>
					<NavLinks />
					<SocialIcons />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
