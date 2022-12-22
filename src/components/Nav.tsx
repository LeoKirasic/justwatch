import React from 'react';
import Favorites from './Favorites';
import Search from './Search';
function Nav() {
  return (
    <div className='flex justify-center items-center mt-2'>
      <Favorites></Favorites>
      <Search></Search>
    </div>
  );
}

export default Nav;
