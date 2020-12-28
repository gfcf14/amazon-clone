import React from 'react';
import { bannerImage } from 'images';
import './home.scss';

export function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={bannerImage} alt="home-image" />
      </div>
    </div>
  );
}