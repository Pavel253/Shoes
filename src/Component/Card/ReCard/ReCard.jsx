import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemFromCart, setItemInCart } from "../../../redux/cart/reducer";
import { setCurrentShoes } from "../../../redux/shoes/reducer";
import "./ReCard.scss";
import { Link } from "react-scroll";

const ReCard = ({ shoes }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === shoes.id);

  const handleClick = (e) => {
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
    history(`/${shoes.title}`);
  };

  return (
    <div className="re__card__shoes-buy">
      <h2 className="title__shoes">{shoes.title}</h2>
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="shoes"
        className="btn__link"
        onClick={handleClickPages}
      >
        <img className="shoes__img" src={shoes.image} alt="" />
      </Link>
      <div className="flex__btn">
        <button className="btn" onClick={handleClick}>
          {isItemInCart ? "Remove from cart" : "To cart"}
        </button>
      </div>
    </div>
  );
};

export default ReCard;
