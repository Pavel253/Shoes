import React from "react";

import "./ModalCarousel.scss";

const ModalCarousel = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal__carousel active" : "modal__carousel"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="btn__exit" onClick={() => setActive(false)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <form className="form">
          <img className="img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.onlinetrade.ru%2Fimg%2Ffullreviews%2F59793%2F2_big.jpg&f=1&nofb=1&ipt=5db970691639b6377c8481cd79bc6d821a2a391371258e55067e9d4fa0ee403f&ipo=images" alt="" />
          <label className="text">Leave your email and we will notify you of new product arrivals!</label>
          <div className="email__user">
            <input type="email" className="email" placeholder="Notify me!" />
            <button className="btn">to send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCarousel;
