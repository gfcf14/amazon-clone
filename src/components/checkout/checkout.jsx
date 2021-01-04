import React from 'react';
import { CheckoutProduct, Subtotal } from 'components';
import { useStateValue } from 'helpers/state-provider';
import { logoImage } from 'images';
import './checkout.scss';

export function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src={logoImage} alt='' />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping Cart</h2>

          {cart.map((item, i) => {
            return (
              <CheckoutProduct key={`prod-${i}`} {...item} />
            );
          })}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}
