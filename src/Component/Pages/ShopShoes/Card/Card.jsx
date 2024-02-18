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

const Card = ({ shoes, id, active, setActive }) => {
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

  const handleClickPages = () => {
    dispatch(setCurrentShoes(shoes));
    history(`/${shoes.id}`);
  };

  // const [modal, setModal] = useState(false)

  return (
    <div id={id} className='card__shoes-buy' >
      <h2 className="title__shoes">{shoes.title}</h2>
      <div className="btn__link" onClick={handleClickPages}>
        <img className="shoes__img" src={shoes.image} alt="" />
      </div>
      {shoes.quantity != 0 &&
        <div className="infa">
          <div className="infa__shoes">
            <div className="span__infa">color:
              <span className="color">{colorId(shoes.color)}</span>
              <span className="color">{colorId(shoes.color1)}</span>
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
        </div> || 
        <div className="none__shoes">
          <span className="span">Find out about receipts</span>
          <button className="btn" onClick={() => setActive(!active) }>Leave a request</button>
        </div>
      }
    </div>
  );
};

export default Card;
