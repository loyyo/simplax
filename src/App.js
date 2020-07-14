import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

export const App = ({ darkModeDefault = false }) => {
	const [darkMode, setDarkMode] = useState(darkModeDefault);

	return (
		<main className={darkMode ? 'darkmode' : undefined}>
			<div darkMode={darkMode} setDarkMode={setDarkMode}>
				<Header />
				<Main />
				<Footer />
			</div>
		</main>
	);
};

App.propTypes = {
	darkModeDefault: PropTypes.bool,
};
