import React from 'react';
import headerImage from '../../assets/Header.png';

function Header() {
  return (
    <img
      className='max-w-[150px] 2xl:max-w-[500px] md:max-w-[300px]'
      src={headerImage}
      alt='Margins Watch'
    ></img>
  );
}

export default Header;
