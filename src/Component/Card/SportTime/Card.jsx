import React from "react";
import "./Card.scss";

import img from "../../../Img/CardShoes/Desk.png";

const Card = ({ setItem, setActive, shoes, id }) => {

  const clickItem = () => {
    setItem(shoes)
    setActive(true)
  }

  return (
    <div id={id} className="card__shoes" onClick={() => clickItem()}>
      <img className="desk" src={img} alt="" />
      <h2 className="title__shoes">{shoes.title}</h2>
      <img className="shoes__img" src={shoes.image} alt="" />
    </div>
  );
};

export default Card;
