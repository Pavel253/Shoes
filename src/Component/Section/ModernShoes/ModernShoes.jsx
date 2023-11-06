import React from "react";

import "./ModernShoes.scss";

import img from "../../../Img/ModernShoes/Product.png";
import Btn from "../../Button/Btn";

const ModernShoes = () => {
  return (
    <section className="modern__shoes section">
      <div className="container">
        <div className="img__block">
          <div className="block" />
          <div className="block2" />
          <img src={img} alt="" />
        </div>
        <div className="block__shoes">
          <h2 className="title">WE PROVIDE MODERN SHOES</h2>
          <p className="text">
            Design for the way you live your life. Atoms are beautiful in their
            simplicity, supporting your feet with absolute comfort.
          </p>
          <Btn items='Explore More' />
        </div>
      </div>
    </section>
  );
};

export default ModernShoes;
