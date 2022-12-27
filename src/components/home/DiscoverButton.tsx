import React from 'react';
import { Link } from 'react-router-dom';

function DiscoverButton() {
  return (
    <button className='bg-primary h-14 w-48 rounded-md text-xl font-medium text-black'>
      <Link to='/discover'>Discover movies</Link>
    </button>
  );
}

export default DiscoverButton;
