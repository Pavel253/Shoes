import React from "react";
import "./Handiwork.scss";

import img1 from '../../../Img/Handiwork/Rectangle 1.png'
import img2 from '../../../Img/Handiwork/Rectangle 2.png'

const Handiwork = () => {
  return (
    <section className="handiwork section">
      <div className="container">
        <h2 className="title__handiwork">
          THE ESSENCE <img src={img1} alt="" /> HANDCRAFTED <img src={img2} alt="" />  OF FOOTWEAR.
        </h2>
        <p className="text__handiwork">In terms of footwear, we are the first in Canada to have opened not simple "shops" but real company outlets that offer the same service as the artisan shops of yesteryear: this to make you go without fail every time you want to buy a pair of handmade genuine leather shoes. Without fear of making mistakes and with the certainty that you will be able to wear them comfortably from the beginning.
Are you also curious to find out why hundreds of people choose us every day?
</p>
      </div>
    </section>
  );
};

export default Handiwork;
