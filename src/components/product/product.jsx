import React from 'react';
import './product.scss';

export function Product(props) {
  const {
    id,
    image,
    price,
    rating,
    title
  } = props;

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
            return <p>🌟</p>;
          })}
        </div>
      </div>

      <img src={image} alt='product-image' />
      <button>Add to Cart</button>
    </div>
  );
}