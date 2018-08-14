import React from 'react';
import logo from './logo.svg';
import './logo.css'

const Logo = () => {
	return (
			<div className='logo-container'>
				<div><img className='logo' src={logo} alt='logo' /></div>
			</div>
		);
}


export default Logo;
