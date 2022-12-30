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
        className='w-20 bg-transparent text-light-gray'
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
