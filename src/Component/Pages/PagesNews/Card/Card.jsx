import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='card__news-pages'>
      <img className='img__news' src={data.image} alt="" />

      <h3 className='title__h3'>{data.title}</h3>
      <p className='text'>{data.text}</p>
    </div>
  );
};

export default Card;