import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({
  handleSearchChange,
  filteredProducts,
  value,
  setValue,
}) => {

  const [isOpen, setIsOpen] = useState(true);

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <form className="search">

      <div className="form__search">
        <input
          value={value}
          onChange={handleSearchChange}
          onClick={inputClickHandler}
          type="text"
          className="input"
        />
        <ul className="autocomplete">
        {value && isOpen
          ? filteredProducts.map((shoes, key) => {
          return (
            <li
              key={key}
              className="autocomplete__item"
              onClick={itemClickHandler}
            >
              {shoes.title}
            </li>
          )
        })
          : null}
      </ul>
        <Link className="btn__link" to="/shop-shoes">
          <button className="btn__search">
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
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Search;
