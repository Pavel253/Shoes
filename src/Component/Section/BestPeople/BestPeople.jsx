import React from "react";

import "./BestPeople.scss";

import Btn from "../../Button/Btn";

import img1 from "../../../Img/BestPeople/Box.png";
import img2 from "../../../Img/BestPeople/Box-1.png";
import img3 from "../../../Img/BestPeople/Box-2.png";

const BestPeople = () => {
  return (
    <section className="best__people section">
      <div className="container">
        <div className="container__flex">
          <div className="block__text">
            <h2 className="title">BEST SHOES FOR THE BEST PEOPLE</h2>
            <p className="text">
              Design for the way you live your life. Atoms are beautiful in
              their simplicity, supporting your feet with absolute comfort.
            </p>
            <Btn items="Explore More" />
          </div>
          <div className="block__img">
            <div className="blur"></div>
            <img className="img1" src={img1} alt="" />
            <img className="img2" src={img2} alt="" />
            <img className="img3" src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPeople;
