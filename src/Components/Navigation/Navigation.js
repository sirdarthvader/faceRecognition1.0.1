import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {

  if (isSignedIn) {
    return (
      <div className="nav pa3">
        <div>
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
              <img src={brain} alt='brain' />
            </div>
          </Tilt>
        </div>
        <div className="login">
            <span className='f3 link dim white underline pa3 pointer' onClick={() => onRouteChange('signin')} >Signout</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav pa3">
      <div>
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner">
            <img src={brain} alt='brain' />
          </div>
        </Tilt>
      </div>
      <div className="login">
          <span className='f3 link dim white underline pa3 pointer' onClick={()=> onRouteChange('signin')} >Signin</span>
          <span className='f3 link dim white underline pa3 pointer' onClick={()=> onRouteChange('Register')} >Register</span>
      </div>
    </div>
    );
  }
}
export default Navigation;