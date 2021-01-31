import React, { useState, useEffect } from 'react';

const Time = () => {
	const [time, setTime] = useState(new Date());
	const timeString = time.toLocaleTimeString();
	let hours = time.getHours() * 60 * 60;
	let minutes = time.getMinutes() * 60;
	let seconds = time.getSeconds();
	let currentTimeInSeconds = hours + minutes + seconds;
	const halfDay = 43200;

	useEffect(() => {
		const outline = document.querySelector('.moving-outline circle');
		const outlineLength = outline.getTotalLength();
		let progress = outlineLength - (currentTimeInSeconds / halfDay) * outlineLength;
		outline.style.strokeDashoffset = progress;
		outline.style.strokeDasharray = outlineLength;
	}, [currentTimeInSeconds]);

	const updateTime = () => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	};

	return (
		<div className='time'>
			<h2>{timeString}</h2>
			{updateTime()}
		</div>
	);
};

export default Time;
