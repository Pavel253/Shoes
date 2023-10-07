import React, { useState } from "react";
import "./Header.scss";

import Logo from "../../Img/Logo.png";

// import Menu from "../Menu/BurgerMenu";
import BurgerMenu from "../Menu/BurgerMenu";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__navigation">
          <div className="navigation__container">
            <div onClick={() => setActive(!active)} className={active ? "menu__header active" : "menu__header"}>
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
          <img className="logo" src={Logo} alt="" />
          <div className="menu__user">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_46_911)">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_46_911">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_46_917)">
                <path
                  d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_46_917">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <BurgerMenu active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
