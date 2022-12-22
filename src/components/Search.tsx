import React from 'react';
import searchIcon from '../assets/Search.png';

function Search() {
  return (
    <div className='text-light-gray flex'>
      <img className='w-5' src={searchIcon} alt='Search icon'></img>
      <input
        className='w-20 bg-transparent'
        type='text'
        name='search'
        placeholder='Search'
      />
    </div>
  );
}

export default Search;
