 






import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
			<div className='w-70 tc container'>
				<input className='f4 pa2 w-70 center' type='text' />
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Detect</button>
			</div>
		);
}


export default ImageLinkForm;