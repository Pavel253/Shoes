import React from 'react';

import './LogoSection.scss';

import img1 from '../../../Img/Logo/Logo 01.png'
import img2 from '../../../Img/Logo/Logo 02.png'
import img3 from '../../../Img/Logo/Logo 03.png'
import img4 from '../../../Img/Logo/Logo 04.png'
import img5 from '../../../Img/Logo/Logo 05.png'
import img6 from '../../../Img/Logo/Logo 06.png'
import img7 from '../../../Img/Logo/Logo 08.png'
import img8 from '../../../Img/Logo/Logo 09.png'

const LogoSection = () => {
  return (
    <section className='logo__section section'>
      <div className="container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </section>
  );
};

export default LogoSection;