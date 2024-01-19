import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card/Card.jsx";
import ModalCarousel from "../../Modal/ModalCarousel.jsx";
import "./ShopShoes.scss";
import Gender from "./filter/Gender.jsx";
import Colors from "./filter/Colors.jsx";

const ShopShoes = ({
  filteredProducts,
  onChangeGender,
  categories,
  colors,
  shoesData,
  setItem,
  item,
  activeGender,
  handleClick,
}) => {
  const [active] = useState(false);
  const [modalActive, setModalActive] = useState(false);


  const ssToDisplay = filteredProducts.map((shoes, id) => {
    return (
      <Card
        setItem={setItem}
        id={id}
        shoes={shoes}
        setActive={setModalActive}
      />
    );
  });

  const handleGenderChange = (gender) => {
    onChangeGender(gender);
    handleClick(gender)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="container">
        <div className="container__header">
          <Link className="btn" to="/">
            <button items="back">Back</button>
          </Link>
        </div>
        <div className="container__shoes">
          <aside className="aside__container">
            <Gender categories={categories} activeGender={activeGender} handleGenderChange={handleGenderChange} />
            <Colors colors={colors} activeGender={activeGender} handleGenderChange={handleGenderChange} />
          </aside>

          <div className={active ? "shoes__buy active" : "shoes__buy"}>
            {ssToDisplay}
          </div>
        </div>

        <ModalCarousel
          setItem={setItem}
          item={item}
          active={modalActive}
          setActive={setModalActive}
          shoes={shoesData}
        />
      </main>
    </motion.div>
  );
};

export default ShopShoes;
