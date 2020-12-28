import React from 'react';
import { logoImage } from '../../images';


export function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={logoImage} alt='header-logo' />
    </div>
  );
}