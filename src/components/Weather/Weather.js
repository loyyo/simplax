import React from 'react';
import Time from './Time';
import Quotes from './Quotes';

const Weather = () => {
	return (
		<div className='weather'>
			<div></div>
			<Time />
			<Quotes />
		</div>
	);
};

export default Weather;
