import React from "react";
import "./Card.scss";

import img from "../../../Img/CardShoes/Desk.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentShoes } from "../../../redux/shoes/reducer";

const Card = ({ shoes, id }) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClickPages = () => {
    dispatch(setCurrentShoes(shoes));
    history(`/${shoes.title}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      id={id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      to="shoes"
      className="card__shoes"
      onClick={handleClickPages}
    >
      <img className="desk" src={img} alt="" />
      <h2 className="title__shoes">{shoes.title}</h2>
      <img className="shoes__img" src={shoes.image} alt="" />
    </div>
  );
};

export default Card;
