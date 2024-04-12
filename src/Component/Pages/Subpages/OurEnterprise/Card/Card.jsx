import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='card__news' id={data.id}>
      <h3 className='title__h3'>{data.title}</h3>
      <img className='img__news' src={data.image} alt="" />
      <p className='text'>{data.text}</p>
    </div>
  );
};

export default Card;