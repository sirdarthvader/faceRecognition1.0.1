








import React from 'react';
import './Inputimage.css';


const Inputimage = ({ imageurl, box }) => {
	return(
			<div className='center ma'>
				<div className='absolute mt2'>
					{imageurl && <img id='inputimage' alt='inputimg' src={imageurl} width='500px' height='auto' />}
					<div className='bounding-box' style={{top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}} ></div>
				</div>
			</div>
		);
}

export default Inputimage;

