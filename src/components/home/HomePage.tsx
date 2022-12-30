import React from 'react';
import HeroText from './HeroText';
import SubText from './SubText';
import DiscoverButton from './DiscoverButton';
import Header from '../shared/Header';
import Nav from '../shared/Nav';
import TextContainer from './TextContainer';
function HomePage(props: any) {
  return (
    <div className='flex flex-col items-center  font-lato'>
      <Nav favorites={props.favorites}></Nav>
      <TextContainer></TextContainer>
      <DiscoverButton></DiscoverButton>
    </div>
  );
}

export default HomePage;
