import React from "react";
import Card from "../../Card/FavoriteNike/Card.jsx";
import "./FavoriteNike.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const FavoriteNike = ({ shoesData, item, setItem }) => {

  const filteredProducts = shoesData.filter(
    (product, index, self) => index === self.findIndex((p) => p.title === product.title)
  );

  return (
    <section className="favorite__nike section">
      <div className="container">
        <h2 className="title">Our Favorite Nike styles.</h2>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          1600: {
            slidesPerView: 4,
          },
          1350: {
            slidesPerView: 3,
          },
          1151: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 3,
          },
          569: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 2,
          },
        }}
        className="card__container"
      >
        {filteredProducts.map((shoes, id) => {
          return (
            <SwiperSlide>
              <Card
                setItem={setItem}
                id={id}
                shoes={shoes}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default FavoriteNike;
