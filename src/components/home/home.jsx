import React from 'react';
import FlipMove from 'react-flip-move';
import { Product } from 'components';
import { bannerImage } from 'images';
import './home.scss';

export function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={bannerImage} alt="home-image" />

        <div className='home__row'>
          <FlipMove>
            <Product
              id='1234'
              image='https://4.bp.blogspot.com/-hEZk0auli74/UCudjfbMFJI/AAAAAAAABgo/_jtOdOAsqS0/s1600/generic3.jpeg'
              price={1.25}
              rating={5}
              title='Cola'
            />
          </FlipMove>
          <Product
            id='5678'
            image='https://3.bp.blogspot.com/-5GMnkJ4Cqz4/UCudic3IIII/AAAAAAAABgQ/nn1Pkde9GPc/s1600/generic-beer.jpg'
            price={2.10}
            rating={4}
            title='Beer'
          />
        </div>
      </div>
    </div>
  );
}
