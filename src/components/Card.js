import React from 'react';

const Card = ({ kitten }) => {
  return (
    <div className='Card' >
      <img src={kitten} />
    </div>
  );
}

export default Card;