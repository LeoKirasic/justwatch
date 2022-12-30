import React from 'react';
import Dropdown from './Dropdown';
import Header from './Header';
import Search from './Search';
function Nav(props: any) {
  return (
    <div className='flex justify-center items-center mt-5 mb-5'>
      <Header></Header>
      <div className='flex justify-center gap-2'>
        <Dropdown favorites={props.favorites}></Dropdown>
        <Search></Search>
      </div>
    </div>
  );
}

export default Nav;
