import React from 'react';
import Weather from '../Weather/Weather';
import Todos from '../Todos/Todos';

const Main = () => {
	return (
		<section className='main'>
			<Weather />
			<Todos />
		</section>
	);
};

export default Main;
