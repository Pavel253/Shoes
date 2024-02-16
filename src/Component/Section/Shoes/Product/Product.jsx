import React, { useEffect } from 'react';

const Product = ({animate, clickAnimate, shoes, data, setData}) => {

  const shoesData = () => {
    setData(shoes)
    clickAnimate()
  }

  useEffect(() => {

    const handleClick = () => {
      const buttonProduct = document.getElementById('product');
      if (buttonProduct) {
        buttonProduct.click();
      }
    };

    handleClick();
  }, []);

  return (
    <div id='product' className="card__shoes" onClick={() => shoesData()}>
      <img src={shoes.image} alt="" />  
      <h4>{shoes.title}</h4>
    </div>
  );
};

export default Product;