import React, { useState } from 'react';
import Time from './Time';
import Quotes from './Quotes';

const api = {
	weather: process.env.REACT_APP_WEATHER_API,
	city: process.env.REACT_APP_CITY_API,
};

const Weather = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
	// const [city, setCity] = useState('');

	const search = (evt) => {
		if (evt.key === 'Enter') {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.weather}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery('');
				});
		}
	};

	const checkLocalization = () => {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		const citySearch = (town) => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&APPID=${api.weather}`
			)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery('');
				});
		};

		function getCity(coordinates) {
			var lat = coordinates[0];
			var lng = coordinates[1];

			fetch(
				`https://us1.locationiq.com/v1/reverse.php?key=${api.city}&lat=${lat}&lon=${lng}&format=json`
			)
				.then((res) => res.json())
				.then((result) => {
					var town = result.address.town.toString();
					citySearch(town);
				});
		}

		function success(pos) {
			var crd = pos.coords;
			var lat = crd.latitude.toString();
			var lng = crd.longitude.toString();
			var coordinates = [lat, lng];
			getCity(coordinates);
			return;
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	};

	let today = new Date().toDateString();
	return (
		<div className='weather-box'>
			<div className='weather'>
				<div>Type your city here:</div>
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
				<button onClick={checkLocalization}>Your localization</button>
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
							<div className='location-weather'>{weather.weather[0].main}</div>
						</div>
					</div>
				) : (
					''
				)}
				<div className='time-circle'>
					<svg
						className='track-outline'
						width='200'
						height='200'
						viewBox='0 0 200 200'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='100' cy='100' r='90' stroke='#cccccc' strokeWidth='10' />
					</svg>
					<svg
						className='moving-outline'
						width='200'
						height='200'
						viewBox='0 0 200 200'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle id='circle' cx='100' cy='100' r='90' stroke='#018EBA' strokeWidth='10' />
					</svg>
					<Time />
				</div>
				<Quotes />
			</div>
		</div>
	);
};

export default Weather;
