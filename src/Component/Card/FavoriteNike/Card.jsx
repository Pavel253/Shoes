import React from 'react';
import './Card.scss'
const Card = ({setItem, shoes, setActive}) => {

  const clickItem = () => {
    setItem(shoes)
    setActive(true)
  }

  return (
    <div className='card' onClick={() => clickItem()}>
      <div className="circle" />
      <div className="shoes__card">
      <h4 className='title__card'>{shoes.title}</h4>
      <span className="price">{shoes.price}</span>
      </div>
      <img className='img' src={shoes.image} alt="" />
    </div>
  );
};

export default Card;