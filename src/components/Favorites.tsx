import React from 'react';
import starImage from '../assets/Star.png';

function Favorites() {
  return (
    <div className='flex text-light-gray items-center mr-5'>
      <img className='w-5' src={starImage} alt='Star Image'></img>
      <div>Favorites</div>
    </div>
  );
}

export default Favorites;
