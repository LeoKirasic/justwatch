import React from 'react';
import Dropdown from './Dropdown';
import Favorites from './Favorites';
import Header from './Header';
import Search from './Search';
function Nav(props: any) {
  return (
    <div className='flex justify-center items-center mt-2'>
      <Header></Header>
      <Dropdown favorites={props.favorites}></Dropdown>
      <Search></Search>
    </div>
  );
}

export default Nav;
