import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Card.scss";

import { useNavigate } from "react-router-dom";
import {
  setItemInCart,
  deleteItemFromCart,
} from "../../../../redux/cart/reducer";
import { setCurrentShoes } from "../../../../redux/shoes/reducer";
import colorId from "../Product/color";

const Card = ({ setItem, setActive, shoes, id }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === shoes.id);

  const [activeClick, setActiveClick] = useState(true)

  const handleClick = (e) => {
    setActiveClick(!activeClick)
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(shoes.id));
    } else {
      dispatch(setItemInCart(shoes));
      <h2 className="title__shoes">{shoes.title}</h2>;
    }
  };

  const clickItem = () => {
    setItem(shoes);
    setActive(true);
  };

  const handleClickPages = () => {
    dispatch(setCurrentShoes(shoes));
    history(`/${shoes.id}`);
  };

  return (
    <div id={id} className='card__shoes-buy' >
      <button className="modal__img" onClick={clickItem}>
        <svg
          width="30px"
          height="34px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.2 165H15.3v1c0.3-0.4 0.6-0.7 0.9-1z" fill="#98C9D6" />
          <path
            d="M15.3 181.3c-1.8 0-3.7-0.3-5.5-1-5.9-2.3-9.8-7.9-9.8-14.3v-1c0-8.4 6.8-15.3 15.3-15.3h0.9c6 0 11.5 3.6 14 9.1 2.4 5.5 1.4 12-2.7 16.5l-0.9 1c-2.9 3.2-7 5-11.3 5z"
            fill="#154B8B"
          />
          <path
            d="M695 211.1c-23.9 0-40.5 20.6-39.7 44.5 8 262.4-197.4 353.9-386.4 372.5C48.6 649.9 30.7 756.2 30.7 756.2h977.4V211.1H695z"
            fill="#98C9D6"
          />
          <path
            d="M1008.1 771.5H30.7c-4.5 0-8.8-2-11.7-5.4-2.9-3.4-4.1-8-3.4-12.4 0.8-4.8 22.5-118.1 251.8-140.7 134.5-13.3 215.2-57.2 259.2-91.7 78.8-61.8 117-151 113.5-265.2-0.5-16.7 5.5-32.7 16.5-44 10.2-10.5 23.8-16.2 38.5-16.2h313.1c8.4 0 15.3 6.8 15.3 15.3v545.1c-0.1 8.3-7 15.2-15.4 15.2zM53.3 740.9h939.5V226.3H695c-8.1 0-13.5 3.8-16.6 7-5.3 5.4-8.2 13.4-7.9 21.8 2 64.8-8.7 123-31.8 173.1-21 45.5-52.4 84.9-93.3 117-85.5 67-196.7 90.3-275 98.1-60.5 6-143.1 22.7-192.9 68.3-11.9 10.9-19.4 21.1-24.2 29.3z"
            fill="#154B8B"
          />
          <path
            d="M814.4 530.8m-107.6 0a107.6 107.6 0 1 0 215.2 0 107.6 107.6 0 1 0-215.2 0Z"
            fill="#F9F9F9"
          />
          <path
            d="M814.4 653.7c-67.7 0-122.8-55.1-122.8-122.8S746.7 408 814.4 408c67.7 0 122.9 55.1 122.9 122.8s-55.1 122.9-122.9 122.9z m0-215.2c-50.9 0-92.3 41.4-92.3 92.3s41.4 92.3 92.3 92.3 92.3-41.4 92.3-92.3-41.4-92.3-92.3-92.3z"
            fill="#154B8B"
          />
          <path
            d="M175.6 644.7s19 109 39.5 111.5c20.5 2.6-184.4 0-184.4 0S105.3 645.9 175.6 644.7z"
            fill="#F9F9F9"
          />
          <path
            d="M176.4 772.6c-14.1 0-31.9-0.1-53-0.2-46-0.3-92.5-0.9-93-0.9l-12.5-23.8c0.8-1.2 19.8-29.1 47.9-57.5 39.3-39.7 76.1-60.2 109.4-60.7l13.1-0.2 2.2 12.9c0 0.2 4.1 23.1 10.3 47.6 9.7 38.1 16.7 49.2 18.9 51.9 10.1 2.6 12.3 11.4 12 16-0.2 2.3-1.7 13.5-16.3 14.5-1.6 0.1-3.7 0.2-6.6 0.3-4.9 0.1-12.1 0.2-21.4 0.2-3.3-0.1-7-0.1-11-0.1zM61 741.3c43 0.5 93.4 0.9 124.5 0.8-4.2-9.9-8.3-22.7-12.6-38.7-4.2-15.7-7.5-31.1-9.6-41.8-37.2 8.5-77.5 49.2-102.3 79.7z"
            fill="#FAFAFA"
          />
          <path d="M30.7 756.2h977.4v102.4H30.7z" fill="#F7F9F9" />
          <path
            d="M1008.1 873.9H30.7c-8.4 0-15.3-6.8-15.3-15.3V756.2c0-8.4 6.8-15.3 15.3-15.3h977.4c8.4 0 15.3 6.8 15.3 15.3v102.4c0 8.5-6.9 15.3-15.3 15.3zM46 843.4h946.8v-71.9H46v71.9z"
            fill="#154B8B"
          />
          <path
            d="M15.3 181.3c-1.8 0-3.7-0.3-5.5-1-5.9-2.3-9.8-7.9-9.8-14.3v-1c0-8.4 6.8-15.3 15.3-15.3h0.9c6 0 11.5 3.6 14 9.1 2.4 5.5 1.4 12-2.7 16.5l-0.9 1c-2.9 3.2-7 5-11.3 5zM1008.1 771.5H30.7c-4.5 0-8.8-2-11.7-5.4-2.9-3.4-4.1-8-3.4-12.4 0.8-4.8 22.5-118.1 251.8-140.7 134.5-13.3 215.2-57.2 259.2-91.7 78.8-61.8 117-151 113.5-265.2-0.5-16.7 5.5-32.7 16.5-44 10.2-10.5 23.8-16.2 38.5-16.2h313.1c8.4 0 15.3 6.8 15.3 15.3v545.1c-0.1 8.3-7 15.2-15.4 15.2zM53.3 740.9h939.5V226.3H695c-8.1 0-13.5 3.8-16.6 7-5.3 5.4-8.2 13.4-7.9 21.8 2 64.8-8.7 123-31.8 173.1-21 45.5-52.4 84.9-93.3 117-85.5 67-196.7 90.3-275 98.1-60.5 6-143.1 22.7-192.9 68.3-11.9 10.9-19.4 21.1-24.2 29.3z"
            fill="#154B8B"
          />
          <path
            d="M215.1 771.5c-5.4 0-10.7-2.9-13.4-8-0.5-0.9-12-22.2-21.3-46.9-14.4-38.1-16.1-62.9-5.2-78.1 4.9-6.9 14.5-8.4 21.3-3.5 6.9 4.9 8.4 14.5 3.5 21.3-0.1 0.1-6.3 9.4 8.9 49.5 8.7 22.9 19.5 43 19.6 43.2 4 7.4 1.3 16.7-6.2 20.7-2.2 1.2-4.7 1.8-7.2 1.8zM325.6 660.4c-9.5 0-18.1-6.4-20.5-16l-9.8-39.2c-2.8-11.3 4.1-22.8 15.4-25.7 11.3-2.8 22.8 4.1 25.7 15.4l9.8 39.2c2.8 11.3-4.1 22.8-15.4 25.7-1.8 0.4-3.5 0.6-5.2 0.6zM439.9 619.4c-7.5 0-14.8-4-18.6-11.1l-19.2-35.5c-5.6-10.3-1.7-23.1 8.5-28.7 10.3-5.6 23.1-1.7 28.7 8.5l19.2 35.5c5.6 10.3 1.7 23.1-8.5 28.7-3.3 1.8-6.7 2.6-10.1 2.6zM560.4 559.9c-3.2 0-6.5-0.7-9.6-2.3l-36-18.3c-10.4-5.3-14.6-18-9.3-28.4 5.3-10.4 18-14.6 28.4-9.3l36 18.3c10.4 5.3 14.6 18 9.3 28.4-3.6 7.4-11.1 11.6-18.8 11.6z"
            fill="#154B8B"
          />
        </svg>
      </button>
      <h2 className="title__shoes">{shoes.title}</h2>
      <div className="btn__link" onClick={handleClickPages}>
        <img className="shoes__img" src={shoes.image} alt="" />
      </div>
      <div className="infa__shoes">
        <div className="span__infa">color:
          <span className="color">{colorId(shoes.color)}</span>
        </div>
        <div className="span__infa">size:
          <span className="size">{shoes.size}</span>
        </div>
        <div className="span__infa">quantity:
          <span className="quantity">{shoes.quantity}</span>
        </div>
        <span className="price">{shoes.price}</span>

      </div>
      <div className="flex__btn">
        <button className="btn">buy</button>
        <button className={activeClick ? 'btn active' : 'btn'} onClick={handleClick}>
          {isItemInCart ? "Remove from cart" : "To cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
