import React from 'react';

const FaceDetection = ({ imageUrl }) => {
  if (imageUrl) {
    return (
      <div className='center ma'>
        <div className='absolut mt2'>
          <img alt='result' src={imageUrl} width='500px' height='auto'/>
        </div>
      </div>
    );
  }
}

export default FaceDetection;
