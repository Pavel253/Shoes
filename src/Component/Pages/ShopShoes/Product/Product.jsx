import React from 'react';
import './Product.scss'
import colorId from './color';
import genderId from './gender';

const Product = ({ gender, color, size, priceMax, priceMin }) => {

  return (
    <div className='filters'>
      <h2 className='title'>Filters</h2>
      <span>Gender: {genderId(gender)}</span>
      <span>Color: {colorId(color)}</span>
      <span>Size: {size}</span>
      <span>Price: {priceMin} - {priceMax}</span>
    </div>
  );
};

export default Product;