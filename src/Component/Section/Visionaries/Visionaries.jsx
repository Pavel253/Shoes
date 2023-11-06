import React from "react";
import "./Visionaries.scss";
import Img from "../../../Img/Visionaries/Picture.png";
import Btn from "../../Button/Btn";

const Visionaries = () => {
  return (
    <section className="section__visionaries section">
      <div className="container">
        <img src={Img} alt="" />
        <div className="block__visionaries">
          <h2 className="title">WE ARE <span>VISIONARIES</span></h2>
          <div className="container__text">
            <p className="text">
              Exploring the boundaries of footwear with expert design knowledge
              and manufacture in mind.
            </p>
            <p className="text">
              <span>INSIGHTFUL CREATIVE DIRECTION :</span> Uniting Consumer
              Insights with progressive manufacturing methods, we create
              comprehensive plans to outpace your competition.
            </p>
            <p className="text">
              <span>PURPOSEFUL DESIGN :</span> We create products that captivate
              consumers and elevate brands. applying a refined sense of beauty
              and style, our designs are alluring.
            </p>
            <p className="text">
              <span>RELENTLESS INNOVATION :</span> We live to challenge the
              boundaries of convention and take advantage of every breakthrough
              opportunity big or small. we’ll help you define the cutting-edge
              of your business.
            </p>
          </div>
          <Btn items="Customization Available" />
        </div>
      </div>
    </section>
  );
};

export default Visionaries;
