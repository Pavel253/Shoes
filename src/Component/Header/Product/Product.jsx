import React from 'react';
import './Product.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentShoes } from '../../../redux/shoes/reducer';
import { deleteItemFromCart } from '../../../redux/cart/reducer';
import colorId from '../../Pages/ShopShoes/Product/color'


const Product = ({items}) => {

  const dispatch = useDispatch()
  const history = useNavigate()

  const handleClickPages = () => {
    dispatch(setCurrentShoes(items)); 
    history(`/${items.title}`);
  };

  const handleClick = () => {
    dispatch(deleteItemFromCart(items.id)); 
  };

  return (
    <div className='product__shoes' id={items.id}>
      <img className='img' onClick={handleClickPages} src={items.image} alt="" />
      <div className="menu__btn">
        <h6 className='title'>{items.title}</h6>
        <div className="flex">
        <span className='size'>Size: {items.size}</span>

        <span className='color'>Color: {colorId(items.color)}</span>

        <span className='price'>{items.price}</span>

        </div>

      </div>
      <button className='button' onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </div>
  );
};

export default Product;