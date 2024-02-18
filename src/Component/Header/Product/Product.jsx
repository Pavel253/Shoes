import React from 'react';
import './Product.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentShoes } from '../../../redux/shoes/reducer';
import { deleteItemFromCart } from '../../../redux/cart/reducer';
import colorId from '../../Pages/ShopShoes/Product/color'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
      <Swiper spaceBetween={20}>
        <SwiperSlide>
          <img className='img' onClick={handleClickPages} src={items.fonImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>          
          <img className='img' onClick={handleClickPages} src={items.fonImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>          
          <img className='img' onClick={handleClickPages} src={items.fonImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>          
          <img className='img' onClick={handleClickPages} src={items.fonImage4} alt="" />
        </SwiperSlide>
        <SwiperSlide>          
          <img className='img' onClick={handleClickPages} src={items.fonImage5} alt="" />
        </SwiperSlide>
      </Swiper>

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