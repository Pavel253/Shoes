import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card/Card.jsx";
import ModalCarousel from "../../Modal/ModalCarousel.jsx";
import "./ShopShoes.scss";
import FilterBtn from "./FilterBtn/FilterBtn.jsx";

const ShopShoes = ({
  filteredCountries,
  shoesData,
  setItem,
  item,
  data,
  setData,
  collection,
  setCollection,
  filter_cat,
}) => {
  const [active] = useState(false);
  const [activeSize, setActiveSize] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setData(shoesData);
    setCollection([...new Set(shoesData.map((item) => item.cat))]);
  }, []);

  const ssToDisplay = filteredCountries.map((shoes, id) => {
    return (
      <Card
        setItem={setItem}
        id={id}
        shoes={shoes}
        setActive={setModalActive}
      />
    );
  });

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
            <div className="categories">
              <h5 className="title__h5">Gender</h5>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Male</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Female</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Children</span>
              </label>
            </div>

            <div
              className={
                activeSize
                  ? "categories categories__size active"
                  : "categories categories__size"
              }
            >
              <h5 className="title__h5">Size</h5>

              <label className="input__categories">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">46</span>
              </label>

              <label className="input__categories">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">45</span>
              </label>

              <label className="input__categories">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">44</span>
              </label>

              <label className="input__categories">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">43</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">42</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">41</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">40</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">39</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">38</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">37</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">36</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">35</span>
              </label>

              <label className="input__categories input__categories-start">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">34</span>
              </label>

              <button
                onClick={() => setActiveSize(!activeSize)}
                className={activeSize ? "btn__size active" : "btn__size"}
              >
                <span className="span">still</span>
                <svg
                  className="svg"
                  width="22"
                  height="16"
                  viewBox="0 0 76 46"
                  fill="while"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 41L38 8L71 41"
                    stroke="#fff"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>

            <FilterBtn
              collection={collection}
              shoesData={shoesData}
              filter_cat={filter_cat}
              setData={setData}
              data={data}
            />

            <div className="categories categories__color">
              <h5 className="title__h5">Color</h5>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Black</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">White</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Red</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Blue</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Yellow</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Brown</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Green</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Orange</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Purple</span>
              </label>

              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="circle__color" />
                <span className="span__categories">Pink</span>
              </label>
            </div>

            <div className="categories">
              <h5 className="title__h5">Type</h5>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Sneakers</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Shoes</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Boots</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Slippers</span>
              </label>
            </div>

            <div className="categories">
              <h5 className="title__h5">Sport type</h5>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Running</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Walking</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Portive</span>
              </label>
              <label className="input__categories" htmlFor="">
                <div className="input__checkbox">
                  <input className="checkbox" type="checkbox" />
                </div>
                <span className="span__categories">Slippers</span>
              </label>
            </div>
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
