import React, { useState } from 'react';

export const Header = ({ loggedInDefault = false }) => {
	// const [loggedIn, setLoggedIn] = useState(loggedInDefault);

	// // TODO: LOGIN/SIGNUP/LOGOUT FUNCTIONS
	// const logInPopup = () => {
	// 	setLoggedIn(!loggedIn);
	// 	console.log('LogIn!');
	// };

	// const signUpPopup = () => {
	// 	console.log('SignUp!');
	// };

	// const logOutPopup = () => {
	// 	setLoggedIn(!loggedIn);
	// 	console.log('LogOut!');
	// };

	return (
		<div className='header'>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='navbar-brand'>
					<img
						src='/Simplax.png'
						height='100'
						className='d-inline-block align-top'
						alt='simplax_logo'
					/>
				</div>
				{/* <div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav'> */}
				{/* TODO: DARK MODE BUTTON */}
				{/* <li className='nav-item align-middle mt-3 mr-5'>
							<button type='button'>(⌐■_■)</button>
						</li> */}
				{/* TODO: ADD LOG IN & SIGN UP & LOG OUT */}
				{/* <div style={{ display: loggedIn ? 'none' : 'block' }}>
							<li className='nav-item d-inline-block'>
								<button type='button' onClick={() => logInPopup()} onKeyDown={() => logInPopup()}>
									Log In
								</button>
							</li>
							<li className='nav-item d-inline-block mt-3'>
								<button type='button' onClick={() => signUpPopup()} onKeyDown={() => signUpPopup()}>
									Sign Up
								</button>
							</li>
						</div>
						<div style={{ display: loggedIn ? 'block' : 'none' }}>
							<li className='nav-item d-inline-block mt-3'>
								<button type='button' onClick={() => logOutPopup()} onKeyDown={() => logOutPopup()}>
									Log Out
								</button>
							</li>
						</div>
					</ul>
				</div> */}
			</nav>
		</div>
	);
};

export default Header;
