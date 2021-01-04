import React from 'react';
import { useStateValue } from 'helpers/state-provider';
import './checkout-product.scss';

export function CheckoutProduct(props) {
  const {
    hideButton,
    id,
    image,
    price,
    rating,
    title
  } = props;

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the cart
    dispatch({
      id,
      type: 'REMOVE_FROM_CART',
    });
  };

  return (
    <div className='checkout-product'>
      <img className='checkout-product__image' src={image} />

      <div className='checkout-product__info'>
        <p className='checkout-product__title'>{title}</p>
        <p className='checkout-product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkout-product__rating'>
          {Array(rating).fill().map((_, i) => ( <p key={i}>🌟</p> ))}
        </div>

        {!hideButton && (<button onClick={removeFromCart}>Remove from Cart</button>)}
      </div>
    </div>
  );
}
