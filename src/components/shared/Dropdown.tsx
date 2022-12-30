import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../ts/interfaces';
const Dropdown = (props: { favorites: Movie[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const viewMovieDetails = (e: any) => {
    navigate(`/movie/${e.target.dataset.id}`, {
      state: { movie: e.target.dataset.id },
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <button
        className='block text-light-gray appearance-none w-[80px] h-[35px] 2xl:w-[200px] 2xl:h-[55px] md:w-[120px] md:h-[40px]  text-sm lg:text-base 2xl:text-2xl bg-red border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue'
        onClick={toggleDropdown}
      >
        Favorites
      </button>
      {isOpen && (
        <ul className='absolute z-50 border border-gray-400 rounded shadow py-1 list-none'>
          {props.favorites.map((favorite: any) => {
            return (
              <li
                key={favorite.id}
                data-id={favorite.id}
                value={favorite.title}
                onClick={(e) => viewMovieDetails(e)}
                className='py-2 px-4 bg-gray-800 bg-opacity-80 hover:bg-gray-800 cursor-pointer'
              >
                {favorite.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
