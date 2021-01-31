import React from 'react';
import Weather from '../Weather/Weather';
import BodyFat from '../Calculators/BodyFat';
// import Todos from '../Todos/Todos';
// import Budget from '../Calculators/Budget';
// import Calorie from '../Calculators/Calorie';
// import Interest from '../Calculators/Interest';

const Main = () => {
	return (
		<section className='main'>
			<Weather />
			<BodyFat />
			{/* <Budget /> */}
			{/* <Calorie /> */}
			{/* <Interest /> */}
			{/* <Todos /> */}
		</section>
	);
};

export default Main;
