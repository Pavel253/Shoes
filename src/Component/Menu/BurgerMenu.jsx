import React from 'react';
import './BurgerMenu.scss';

import Logo from '../../Img/LogoNike.png'

const BurgerMenu = ({active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="blur"></div>
      <div className="menu__site">
        <div className="container">
        <div className="menu__email">
          <h2 className='title__menu'>Let’s stay in touch</h2>
          <form action="" className='form'>
            <input type="email" placeholder='Enter email...' className='email__form'/>
            <button type='submit' className='btn__form'>Subscribe</button>
          </form>
          <img className='logo__nike' src={Logo} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;