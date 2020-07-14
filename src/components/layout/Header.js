import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Header = ({ darkMode, setDarkMode }) => {
	return (
		<header className='header'>
			<nav>
				<div className='logo'>
					{/* TODO: INSERT SIMPLAX LOGO */}
					<img src='/Simplax.png' alt='simplax_logo' />
				</div>
				<ul>
					<li className='settings_darkmode'>
						<button
							type='button'
							onClick={() => setDarkMode(!darkMode)}
							onKeyDown={() => setDarkMode(!darkMode)}
						>
							(⌐■_■)
						</button>
					</li>
					{/* TODO: ADD LOG IN & SIGN UP */}
					<li className='log_in'></li>
					<li className='sign_up'></li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	setDarkMode: PropTypes.func.isRequired,
};
