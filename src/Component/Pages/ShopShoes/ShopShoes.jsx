import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModalCarousel from "../../Modal/ModalCarousel.jsx";
import Filter from "./Filter/Filter.jsx";
import Product from './Product/Product'
import ProductList from './ProductList/ProductList.jsx';
import "./ShopShoes.scss";


const ShopShoes = ({
  shoesData,
  setItem,

  item,
  filters,
  filteredProducts,
  handlePriceChange,

  genderFilter,
  colorFilter,
  sizeFilter,
  priceFilterMax,
  priceFilterMin,

  setGenderFilter,
  setColorFilter,
  setSizeFilter,
  setPriceFilterMax,
  setPriceFilterMin,

  sizeFilter44,

  setSizeFilter44,
}) => {
  const [active] = useState(false);
  const [modalActive, setModalActive] = useState(false);

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
            <Product
              gender={genderFilter}
              color={colorFilter}
              size={sizeFilter}
              priceMax={priceFilterMax}
              priceMin={priceFilterMin}

              size44={sizeFilter44}
            />
            <Filter
              colorFilter={colorFilter}
              setGenderFilter={setGenderFilter}
              setColorFilter={setColorFilter}
              setSizeFilter={setSizeFilter}
              setPriceFilterMax={setPriceFilterMax}
              setPriceFilterMin={setPriceFilterMin}
              data={shoesData}
              genderFilter={genderFilter}
              sizeFilter={sizeFilter}
              priceMax={priceFilterMax}
              priceMin={priceFilterMin}
              
              setSizeFilter44={setSizeFilter44}
            />
          </aside>

          <ProductList
            filteredProducts={filteredProducts}
            active={active}
            filters={filters}
          />

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
