import React from 'react';
import './Modal.scss';

const Modal = ({item, active, setActive}) => {

  const priceShoes =  Number(item.price) + 120

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        <button className='menu__exit' onClick={() => setActive(false)}>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <h2 className='modal__title'>{item.title}</h2>
        <img className='img__shoes' src={item.image} alt="" />
        <div className="span__price">
          <span className='price'>{priceShoes}</span>
          <span className='price__shoes'>{item.price}$</span>
        </div>
        <div className="btn__flex">
          <button className='btn'>В избранное</button>
          <button className='btn'>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;