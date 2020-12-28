import React from 'react';
import { logoImage } from 'images';


export function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={logoImage} alt='header-logo' />

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <button className='header__searchButton'>SEARCH</button>
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>

        <div className='header__optionCart'>
          <button className='header__cartButton'>CART</button>
          <span className='header__optionLineTwo header__cartCount'>0</span>
        </div>
      </div>
    </div>
  );
}