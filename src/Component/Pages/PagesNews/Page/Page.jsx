import React from 'react';

const Page = ({newsData}) => {
  return (
    <div className='card__news-pages'>
      <img className='img__news' src={newsData.image} alt="" />

      <h3 className='title__h3'>{newsData.title}</h3>
      <p className='text'>{newsData.text}</p>
      <button className='btn'>in detail</button>
    </div>
  );
};

export default Page;