import React from "react";
import "./BurgerMenu.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BurgerMenu = ({ active, setActive }) => {

  const handleClick = () => {
    window.location.assign("https://ru.wikipedia.org/wiki/Nike");
  };

  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur" onClick={() => setActive(false)}></div>
      <div className="menu__site">
        <div className="container">
          <div className="menu__email">
            <h2 className="title__menu">Let’s stay in touch</h2>
            <form action="" className="form">
              <input
                type="email"
                placeholder="Enter email..."
                className="email__form"
              />
              <button type="submit" className="btn__form">
                Subscribe
              </button>
            </form>
          </div>
          <div className="menu__history">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
            >
              <SwiperSlide>
                <span className="span__history">
                  The company was founded in 1964 by student Phil Knight,
                  middle-distance runner on the Oregon team and his coach, Bill
                  Bowerman. At first, she was named Blue Ribbon Sports, and her
                  first operation was order of 300 pairs of sneakers from the
                  Japanese company Onitsuka Tiger (in currently ASICS) for
                  resale in the United States. In 1966 he was The company's
                  first store was opened, before that sneakers were sold from
                  cars. Soon, the company began to do more than just resell
                  Japanese sneakers, but also order shoes of your own design,
                  the first successful model was the Cortez sneakers, developed
                  by Bowerman in 1968
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="span__history">
                  In 1971, the company received additional funding from Nissho
                  Iwai Corporation (since 2004) Sojitz and was able to
                  significantly expand its operations, in In the same year, the
                  use of the Nike trademark and Swoosh. In 1972, the following
                  were developed: Nike Moon sneakers with a waffle outsole
                  pattern, obtained with the help of an ordinary waffle iron, in
                  the same year the company entered the Canadian market, and in
                  1974 the market Australia. Starting with the 1972 Olympics,
                  the company began collaborate with well-known and
                  up-and-coming athletes for promotion of its products.
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="span__history">
                  In 1974, the first Blue Ribbon Sports factory was opened in In
                  New Hampshire, this year's sales were $5 million, reached $14
                  million in 1976 and doubled the following year to $28 million,
                  new factories were opened in Maine, Taiwan and in Korea. In
                  1977, sales began in Asia, and the following year also in
                  Europe and South America.
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="span__history">
                  In 1978, the company's name was changed to Nike, Inc. Design
                  innovation and aggressive marketing have allowed Nike to In
                  the late 1970s, the German market was overtaken by the German
                  market. Adidas shoe manufacturer, in 1979 at Nike accounted
                  for half of the sales in this market; Also this year The
                  company started the production of sportswear.
                </span>
              </SwiperSlide>
            </Swiper>
            <button onClick={handleClick} className="nike__btn">
              Nike wikipedia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
