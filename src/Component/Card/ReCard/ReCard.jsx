import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemFromCart, setItemInCart } from "../../../redux/cart/reducer";
import { setCurrentShoes } from "../../../redux/shoes/reducer";
import "./ReCard.scss";
import { Link } from "react-scroll";
import colorId from "../../Pages/ShopShoes/Product/color";

const ReCard = ({ shoes, shoesData }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === shoes.id);

  const [size, setSize] = useState(false)
  const [color, setColor] = useState(false)

  const [sizeData, setSizeData] = useState(shoes.size)
  const [colorData, setColorData] = useState(shoes.color)

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

  const filterSize = shoesData.filter(product => {
    return (
      (shoes.title === product.title & product.id > 0)
    );
  });

  const filterSColor = shoesData.filter(product => {
    return (
      (sizeData === product.size & shoes.title === product.title)
    );
  });

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
      <div className={size | color ? "flex__infa active" : "flex__infa"}>
        <span onClick={() => setSize(!size)} className="infa__span">{sizeData}</span>
        <div className={size ? "size__menu active" : 'size__menu'}>

          {filterSize.map((data) => {
            return (
              <span onClick={() => setSizeData(data.size)} className="size">{data.size}</span>
            )
          })}

        </div>
        <span className="line" />
        <span onClick={() => setColor(!color)} className="infa__span">{colorId(colorData)}</span>
        <div className={color ? "color__menu active" : 'color__menu'}>
        {filterSColor.map((data) => {
            return (
              <span onClick={() => setColorData(data.color)} className="color">{colorId(data.color)}</span>
            )
          })}
        </div>
      </div>
      <div className="flex__btn">
        <button className="btn" onClick={handleClick}>
          {isItemInCart ? "Remove from cart" : "To cart"}
        </button>
      </div>
    </div>
  );
};

export default ReCard;
