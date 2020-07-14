import React, { useState } from 'react';
import Time from './Time';
import Quotes from './Quotes';
require('dotenv').config();

const api = {
	key: 'fe3750b5590c8dfd5a70519caf34f62e',
	base: 'https://api.openweathermap.org/data/2.5/',
};

const Weather = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = (evt) => {
		if (evt.key === 'Enter') {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery('');
				});
		}
	};

	let today = new Date().toDateString();
	return (
		<div className='weather'>
			<div className='search-box-weather'>
				<input
					type='text'
					className='search-bar-weather'
					placeholder='Search...'
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
				/>
			</div>
			{typeof weather.main != 'undefined' ? (
				<div className=''>
					<div className='location-box'>
						<div className='location'>
							{weather.name}, {weather.sys.country}
						</div>
						<div className='date'>{today}</div>
					</div>
					<div className='weather-box'>
						<div className='temperature'>{Math.round(weather.main.temp)}°C</div>
						<div className='weather'>{weather.weather[0].main}</div>
					</div>
				</div>
			) : (
				''
			)}
			<Time />
			<Quotes />
		</div>
	);
};

export default Weather;
