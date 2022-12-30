import React from 'react';
import headerImage from '../../assets/Header.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <img
      className='max-w-[150px] 2xl:max-w-[500px] md:max-w-[300px] cursor-pointer'
      src={headerImage}
      alt='Margins Watch'
      onClick={handleClick}
    ></img>
  );
}

export default Header;
