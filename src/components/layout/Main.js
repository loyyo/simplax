import React from 'react';
import Weather from '../Weather/Weather';
import Todos from '../Todos/Todos';
import Budget from '../Budget/Budget';

const Main = () => {
	return (
		<section className='main'>
			<Weather />
			<Todos />
			<Budget />
		</section>
	);
};

export default Main;
