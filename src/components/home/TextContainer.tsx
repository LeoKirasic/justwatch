import React from 'react';
import HeroText from './HeroText';
import SubText from './SubText';
function TextContainer() {
  return (
    <div className='text-center flex flex-col items-center'>
      <HeroText />
      <SubText />
    </div>
  );
}

export default TextContainer;
