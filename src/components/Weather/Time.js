import React, { useState } from 'react';

const Time = () => {
	const [time, setTime] = useState(new Date());

	const updateTime = () => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	};

	return (
		<div className='time'>
			<h2>{time.toLocaleTimeString()}</h2>
			{updateTime()}
		</div>
	);
};

export default Time;
