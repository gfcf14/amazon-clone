import React from 'react';
import { useStateValue } from 'helpers/state-provider';
import './product.scss';

export function Product(props) {
  const {
    id,
    image,
    price,
    rating,
    title
  } = props;

  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        image,
        price,
        rating,
        title,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => {
            return <p key={i}>🌟</p>;
          })}
        </div>
      </div>

      <img src={image} alt='product-image' />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
