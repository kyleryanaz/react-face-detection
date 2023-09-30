import React from 'react';
import Tilt from 'react-parallax-tilt';
import brainLogo from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 250, width: 250 }}>
        <div className='Tilt-inner pa3'>
          <img style={{ height: '80%', width: '80%', marginTop: '20px' }} alt='brainLogo' src={brainLogo} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
