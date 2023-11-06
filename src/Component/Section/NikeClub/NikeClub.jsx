import React from "react";
import img from "../../../Img/ezgif 1.png";
import logo from "../../../Img/Logo2.png";
import "./NikeClub.scss";
import Btn from "../../Button/Btn";

const NikeClub = () => {
  return (
    <section className="nike__club section">
      <div className="container">
        <div className="banner">
        <div className="block__text">
        <h2 className="title">JOIN OUR NIKECLUB & GET 15% OFF</h2>
        <p className="text">
          Sign up for free. Join the community, Never pay for shipping.
        </p>
        <Btn items="Join Us" />
        </div>
        <img className="logo"  src={logo} alt="" />
        </div>
      </div>
      <img className="shoes"  src={img} alt="" />
    </section>
  );
};

export default NikeClub;
