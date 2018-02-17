








import React from 'react';


const Inputimage = ({ imageurl }) => {
	return(
			<div className='center ma'>
				<div className='absolute mt2'>
					<img alt='inputimg' src={imageurl} width='500px' height='auto' />
				</div>
			</div>
		);
}	


export default Inputimage;

