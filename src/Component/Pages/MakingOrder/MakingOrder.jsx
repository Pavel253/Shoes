import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../Header/utils";
import Product from "../../Header/Product/Product";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MakingOrder.scss";
import { setCurrentShoes } from "../../../redux/shoes/reducer";

import { motion } from "framer-motion";

const MakingOrder = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);

  const handleClick = ({ shoes }) => {
    dispatch(setCurrentShoes(shoes));
    history(`/shop-shoes`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <div className="header__menu">
        <h1 className="title">Product</h1>
        <div className="main-list">
          {items.length > 0 ? (
            items.map((shoes) => <Product items={shoes} />)
          ) : (
            <span className="span__btn" onClick={handleClick}>The basket is empty</span>
          )}
        </div>
        {items.length > 0 ? (
          <div className="cart-menu__arrange">
            <div className="cart-menu__total-price">
              <span>Total: </span>
              <span>{calcTotalPrice(items)} $</span>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default MakingOrder;
