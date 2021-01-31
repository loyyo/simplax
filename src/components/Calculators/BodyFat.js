import React from 'react';

const BodyFat = () => {
	return (
		<div className='body-fat'>
			<form>
				<div className='gender'>
					<div>Gender:</div>
					<input type='radio' id='male' name='gender' value='male' />
					<label for='male'>Male</label>
					<input type='radio' id='female' name='gender' value='female' />
					<label for='female'>Female</label>
				</div>
				<div className='age'>
					<div>Age:</div>
					<input
						type='number'
						id='age'
						name='age'
						placeholder='                            years'
					/>
				</div>
				<div className='weight'>
					<div>Weight:</div>
					<input
						type='number'
						id='weight'
						name='weight'
						placeholder='                               kg'
					/>
				</div>
				<div className='height'>
					<div>Height:</div>
					<input
						type='number'
						id='height'
						name='height'
						placeholder='                               cm'
					/>
				</div>
				<div className='neck'>
					<div>Neck:</div>
					<input
						type='number'
						id='neck'
						name='neck'
						placeholder='                               cm'
					/>
				</div>
				<div className='waist'>
					<div>Waist:</div>
					<input
						type='number'
						id='waist'
						name='waist'
						placeholder='                               cm'
					/>
				</div>
			</form>
		</div>
	);
};

export default BodyFat;
