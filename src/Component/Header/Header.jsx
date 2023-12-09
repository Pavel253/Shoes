import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import Logo from "../../Img/Logo.png";

// import Menu from "../Menu/BurgerMenu";
import BurgerMenu from "../Menu/BurgerMenu";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";

const Header = ({ setIsOpen, isOpen, shoes, value, setValue, filteredCountries }) => {
  const [active, setActive] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeCart, setActiveCart] = useState(false);


  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div
          className="header__navigation"
          title="Header"
          dark={true}
          id="header"
        >
          <div className="navigation__container">
            <div
              onClick={() => setActive(!active)}
              className={active ? "menu__header active" : "menu__header"}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <ul className="menu__navigation">
              <li>
                <a href="http://localhost-live:3000/">New Arrival</a>
              </li>
              <li>
                <a href="http://localhost-live:3000/">Men</a>
              </li>
              <li>
                <a href="http://localhost-live:3000/">Women</a>
              </li>
              <li>
                <a href="http://localhost-live:3000/">Kids</a>
              </li>
            </ul>
          </div>

          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>

          <div className="menu__user">
            <Search
              value={value}
              isOpen={isOpen}
              setActiveSearch={setActiveSearch}
              activeSearch={activeSearch}
              itemClickHandler={itemClickHandler}
              inputClickHandler={inputClickHandler}
              setActive={setActive}
              setValue={setValue}
              filteredCountries={filteredCountries}
            />

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_46_914)">
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14ZM6 18C6.22 17.28 9.31 16 12 16C14.7 16 17.8 17.29 18 18H6Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_46_914">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Cart
              shoes={shoes}
              activeCart={activeCart}
              setActiveCart={setActiveCart}
            />
          </div>
        </div>
      </div>
      <BurgerMenu active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
