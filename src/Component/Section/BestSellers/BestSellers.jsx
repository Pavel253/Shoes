import React from 'react';

import './BestSellers.scss'

import img1 from '../../../Img/BestSellers/Women.png'
import img2 from '../../../Img/BestSellers/Kids.png'
import img3 from '../../../Img/BestSellers/Men.png'

const BestSellers = () => {
  return (
    <section className='best__sellers section'>
      <div className="container">
        <h2 className='title'>BEST SELLERS</h2>
        <div className="container__photo">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BestSellers;