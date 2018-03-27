import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ inputchange, buttonsubmit, refreshPage }) => {
	return (
			<div>
				<p className='f3'>{ 'Enter the image url, and cool brains will show any detectable face.'}</p>
				<div className='center'>
					<div className='form center pa4 br3 shadow-5'>
						<input className='f4 pa2 w-50 center' type='text' onChange={inputchange} />
						<button 
						className='w-25 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={buttonsubmit}>Detect</button>
						<button 
						className='w-25 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={refreshPage}>Clear</button>
					</div>
				</div>
			</div>
		);
}


export default ImageLinkForm;


