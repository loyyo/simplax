import React, { useState } from 'react';

export const Header = ({ loggedInDefault = false }) => {
	const [loggedIn, setLoggedIn] = useState(loggedInDefault);

	// TODO: LOGIN/SIGNUP/LOGOUT FUNCTIONS
	const logInPopup = (loggedIn, setLoggedIn) => {
		setLoggedIn(!loggedIn);
		console.log('LogIn!');
	};

	const signUpPopup = (loggedIn) => {
		console.log('SignUp!');
	};

	const logOutPopup = (loggedIn, setLoggedIn) => {
		setLoggedIn(!loggedIn);
		console.log('LogOut!');
	};

	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='navbar-brand'>
					<img
						src='/Simplax.png'
						height='100'
						className='d-inline-block align-top'
						alt='simplax_logo'
					/>
				</div>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav'>
						{/* TODO: DARK MODE BUTTON */}
						<li className='nav-item align-middle mt-3 mr-5'>
							<button type='button'>(⌐■_■)</button>
						</li>
						{/* TODO: ADD LOG IN & SIGN UP & LOG OUT */}
						<div style={{ display: loggedIn ? 'none' : 'block' }}>
							<li className='nav-item d-inline-block'>
								<button
									type='button'
									onClick={() => logInPopup(loggedIn, setLoggedIn)}
									onKeyDown={() => logInPopup(loggedIn, setLoggedIn)}
								>
									Log In
								</button>
							</li>
							<li className='nav-item d-inline-block mt-3'>
								<button
									type='button'
									onClick={() => signUpPopup(loggedIn, setLoggedIn)}
									onKeyDown={() => signUpPopup(loggedIn, setLoggedIn)}
								>
									Sign Up
								</button>
							</li>
						</div>
						<div style={{ display: loggedIn ? 'block' : 'none' }}>
							<li className='nav-item d-inline-block mt-3'>
								<button
									type='button'
									onClick={() => logOutPopup(loggedIn, setLoggedIn)}
									onKeyDown={() => logOutPopup(loggedIn, setLoggedIn)}
								>
									Log Out
								</button>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
