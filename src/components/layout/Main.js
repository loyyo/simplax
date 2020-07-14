import React from 'react';
import Weather from './components/Weather/Weather';
import Todos from './components/Todos/Todos';
import Budget from './components/Budget/Budget';

export const Main = () => {
	return (
		<section className='main'>
			<Weather />
			<Todos />
			<Budget />
		</section>
	);
};
