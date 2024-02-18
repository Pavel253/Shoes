import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='card__news'>
      <h3 className='title__h3'>{data.title}</h3>
      <img className='img__news' src={data.image} alt="" />
      <p className='text'>{data.text}</p>
      <button className='btn'>in detail</button>
    </div>
  );
};

export default Card;