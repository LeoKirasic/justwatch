import React from 'react';
import searchIcon from '../../assets/Search.png';
function Search() {
  return (
    <input
      className='w-20 bg-transparent text-light-gray'
      type='text'
      name='search'
      placeholder='Search'
    />
  );
}

export default Search;
