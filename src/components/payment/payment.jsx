import React from 'react';
import { useStateValue } from 'helpers/state-provider';
import './payment.scss';
import { CheckoutProduct } from 'components/checkout-product/checkout-product';
import { Link } from 'react-router-dom';

export function Payment() {
  const [ {cart, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} item{cart.length > 1 ? 's' : ''}</Link>)
        </h1>
        {/* delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* review items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {cart.map((item, i) => (
              <CheckoutProduct key={`item-${i}`} {...item} />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            
          </div>
        </div>
      </div>
    </div>
  );
}
