import React from 'react';
import './Slide.scss';

const Slide = ({data}) => {
  return (
    <div className='slide' id={data.id}>
      <img className='img__slide' src={data.img} alt="" />
      <div className="block"></div>
      <p className='text__slide'>{data.text}</p>
    </div>
  );
};

export default Slide;