import React from "react";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentShoes } from "../../../redux/shoes/reducer";

const Card = ({ shoes }) => {
  const dispatch = useDispatch();
  const history = useNavigate();



  const handleClickPages = () => {
    dispatch(setCurrentShoes(shoes));
    history(`/${shoes.title}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="card__favorite" onClick={handleClickPages}>
      <div className="circle" />
      <div className="shoes__card">
        <h4 className="title__card">{shoes.title}</h4>
        <span className="price">{shoes.price}</span>
      </div>
      <img className="img" src={shoes.image} alt="" />
    </div>
  );
};

export default Card;
