import React from 'react';

import { Link } from 'react-router-dom'

import img from '../../../../Img/OurService/1.png'

const CustomizeProduct = () => {

  return (
    <div className='section__services'>
      <div className="container">
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="/"
          className='btn'>
          Back
        </Link>
        <div className="customize__product">
        <div className="container__img">
          <h2 className='title__h2'>OUR SERVICES</h2>
          <img src={img} className='img' alt="" />
        </div>
        <div className="form__text" style={{ background: "#fff" }}>
          <h6 className='title__h6' style={{ color: "#000" }}>How to find your product:</h6>
          <ul>
            <li style={{ color: "#000" }}>By page search</li>
            <li><hr /></li>
            <li style={{ color: "#000" }}>According to the search filters, it will be the best option if you know the size of the foot and not only</li>
            <li><hr /></li>
            <li style={{ color: "#000" }}>Through the search at the top, if you know the name of the cross</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;