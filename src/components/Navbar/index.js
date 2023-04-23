import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
	/** State for window hash */
	const [hash, setHash] = useState(window.location.hash);
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			window.scrollY > lastScrollY ? setShow(false) : setShow(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	/** Set state to hash of current window */
	useEffect(() => {
		window.addEventListener('hashchange', () => {
			setHash(window.location.hash);
		});
		return () => {
			window.removeEventListener('hashchange', () => {
				setHash(window.location.hash);
			});
		};
	}, []);

	/** Render Navbar and set the current pages nav tab to active */
	return (
		<nav
			className='navbar navbar-expand fixed-top navbar-light navbar-slide-in'
			style={show ? { top: 0 } : { top: -100 }}>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<Link
						to='/portfolio'
						id='nav__link'
						key={Date.now()}
						className={
							hash === '#/portfolio'
								? 'nav-link active'
								: 'nav-link'
						}>
						Portfolio
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						to='/about'
						id='nav__link'
						key={Date.now()}
						className={
							hash === '#/about' ? 'nav-link active' : 'nav-link'
						}>
						About
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/' id='nav__link-home' className='nav-link home'>
						NMK
					</Link>
				</li>
				{/* <li className='nav-item'>
						<Link
							to='/resume'
							id='nav__link'
							key={Date.now()}
							className={
								hash === '#/resume'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							Resume
						</Link>
					</li> */}
			</ul>
		</nav>
	);
}

export default Navbar;
