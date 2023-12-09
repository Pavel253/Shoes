import React from "react";

import "./ModalCarousel.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";

const ModalCarousel = ({ item, active, setActive }) => {
  return (
    <div
      className={active ? "modal__carousel active" : "modal__carousel"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img className="img" src={item.image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" src={item.image8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ModalCarousel;
