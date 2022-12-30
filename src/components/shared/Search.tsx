import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search/:q`, { state: { query: query } });
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='text-light-gray appearance-none w-[85px] h-[35px] 2xl:w-[200px] 2xl:h-[55px] md:w-[120px] md:h-[40px] bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue'
        type='text'
        name='search'
        placeholder='Search'
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
