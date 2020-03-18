import React from 'react';

const Button = ({ getNewKitty }) => {
  return (
    <div onClick={getNewKitty} className='Button' >
      <h2>Get New Kitty</h2>
    </div>
  );
}

export default Button;