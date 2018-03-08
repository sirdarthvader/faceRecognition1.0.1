import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{ display: 'flex', justifyContent: 'space-between' }}>
			<p className='f3 pa3'>Smart Brain</p>
			<p onClick={() => onRouteChange('signin')} className="pointer">Sign Out</p>
		</nav>
		);
}


export default Navigation;