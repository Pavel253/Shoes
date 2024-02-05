import React from "react";
import "./Shoes.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import ReCard from "../../Card/ReCard/ReCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import InformationSs from "./InformationSs/InformationSs";

const Shoes = ({ shoesData }) => {
  const shoes = useSelector((state) => state.shoes.currentShoes);

  if (!shoes) return null;

  const genderId = () => {
    if (shoes.gender === 1) {
      return 'Male'
    } 
    if (shoes.gender === 2) {
      return 'Female'
    }
    if (shoes.gender === 3) {
      return 'Children'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="description__ss" title="Shoes" dark={true} id="shoes">
          <div className="img__ss">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img className="img" src={shoes.image1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img" src={shoes.image8} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <InformationSs shoesData={shoesData} size={shoes.size} shoes={shoes} />
        </div>
        <div className="info__ss">
          <div className="categories__material">
            <div className="material">
              <h6 className="title">Material</h6>
              <span className="span">Textile, Nylon, Synthetic Leather</span>
            </div>
            <div className="material">
              <h6 className="title">Sole material</h6>
              <span className="span">Rubber</span>
            </div>
            <div className="material">
              <h6 className="title">Season</h6>
              <span className="span">For any season</span>
            </div>
            <div className="material">
              <h6 className="title">Gender</h6>
              <span className="span">{genderId()}</span>
            </div>
            <div className="material">
              <h6 className="title">Size</h6>
              <span className="span">{shoes.size}</span>
            </div>
            <div className="material">
              <h6 className="title">Manufacturer country</h6>
              <span className="span">Vietnam</span>
            </div>
          </div>
          <p className="text">
            La serie Cosmic Unity de Nike Basketball es realmente de otro mundo
            en su diseño, pero no tendrá que viajar muy lejos para conseguir un
            par de este producto impulsado por la sostenibilidad. Ahora que
            aparece en un paquete Black, Football Grey y Off Noir, este Cosmic
            Unity 2 arroja colores llamativos y vibrantes que generalmente están
            conectados con las opciones de calzado del Swoosh y opta por un
            paquete que refleja la superficie de la luna y otras formaciones
            rocosas flotantes. en el espacio. Black y Off Noir comparten la
            parte superior, mientras que los puntos grises están moteados en la
            parte superior de malla tejida y en la entresuela, mientras que se
            pueden ver toques multicolores integrados en el cordón.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          className="recommendation"
        >
          {shoesData.map((shoes, id) => {
            return (
              <SwiperSlide>
                <ReCard shoes={shoes} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Shoes;
