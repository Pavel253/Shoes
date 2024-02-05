import React from 'react';

const Product = ({shoes, data, setData}) => {

  const shoesData = () => {
    setData(shoes)
  }

  return (
    <div className="card__shoes" onClick={() => shoesData()}>
      <img src={shoes.image} alt="" />  
      <h4>{shoes.title}</h4>
    </div>
  );
};

export default Product;