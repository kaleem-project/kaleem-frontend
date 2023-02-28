import React from 'react';
import Auxiliary from '../components/Auxiliary/Auxiliary';
import Hero from './Hero/Hero';
import Tools from './Tools/Tools';

function MainPage() {
  return (
    <Auxiliary>
      <Hero></Hero>
      <Tools></Tools>
    </Auxiliary>
  );
}

export default MainPage;
