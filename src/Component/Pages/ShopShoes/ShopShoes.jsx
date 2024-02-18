import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Filter from "./Filter/Filter.jsx";
import Product from './Product/Product'
import ProductList from './ProductList/ProductList.jsx';
import "./ShopShoes.scss";
import Pagination from "./Pagination/Pagination.jsx";
import ModalCarousel from "../../Modal/ModalCarousel.jsx";


const ShopShoes = ({
  shoesData,

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
  setFilters,

  itemsPerPage,
  filteredProducts
}) => {
  const [active] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            <Product
              gender={genderFilter}
              color={colorFilter}
              size={sizeFilter}
              priceMax={priceFilterMax}
              priceMin={priceFilterMin}
            />
            <Filter
              setFilters={setFilters}
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
            />
          </aside>

          <ProductList
            active={active}
            shoesData={shoesData}
            filteredProducts={filteredProducts}
            currentItems={currentItems}
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredProducts.length}
          currentPage={currentPage}
          onClick={handleClick}
        />

        <ModalCarousel
          active={modalActive}
          setActive={setModalActive}
        />
      </main>
    </motion.div>
  );
};

export default ShopShoes;
