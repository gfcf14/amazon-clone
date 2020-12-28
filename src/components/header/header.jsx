import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from 'helpers/state-provider';
import { logoImage } from 'images';
import './header.scss';

export function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logoImage} alt='header-logo' />
      </Link>

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

        <Link to='/checkout'>
          <div className='header__optionCart'>
            <button className='header__cartButton'>CART</button>
            <span className='header__optionLineTwo header__cartCount'>
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}