import React, { useState } from 'react';
import colorId from '../../../Pages/ShopShoes/Product/color';
import Select from './Select';

import './Choice.scss'

const Choice = ({ data, shoes, setSizeData, sizeData }) => {
  const [sizeActive, setSizeActive] = useState(false)

  const handleClickSize = (data) => {
    setSizeData(data)
  }

  const ClickSizeActive = () => {
    setSizeActive(!sizeActive)
  }

  const filteredProducts = shoes.filter(product => {
    return (
      (data.title === product.title & product.id > 0)
    );
  });


  return (

    <div className="information__product">

      <span className="price">${data.price}</span>
      <div className="ss__color">
        <h5 className="title__h5">Color</h5>

        <div className="container__ss">

          <button className="color__shoes">
            <span className={`circle__color ${colorId(data.color)}`} />
            <span className="span__categories">{colorId(data.color)}</span>
          </button>

          {data.color1 && <button className="color__shoes">
            <span className={`circle__color ${colorId(data.color1)}`} />
            <span className="span__categories">{colorId(data.color1)}</span>
          </button>}

        </div>
      </div>

      <div className="size__product">

        <div className="container__ss">

          <div className="ss__size">
            <span className="span__title">Choose a size:</span>

            <div className={sizeActive ? "select__size active" : "select__size"}>

              <div className="main__size">
                <span className="size">{sizeData}</span>
                <div className="line"></div>
                <svg onClick={() => ClickSizeActive(!sizeActive)} className={sizeActive ? "svg__choice active" : "svg__choice"} width="32" height="32" viewBox="0 0 32 32" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="black"></path></svg>
              </div>
              <div className={sizeActive ? "menu__size active" : "menu__size"}>
                {filteredProducts.map((shoes) => {
                  return <Select setSizeActive={setSizeActive} handleClick={handleClickSize} data={shoes} />
                })}
              </div>

            </div>

          </div>

        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_46_861)">
            <path
              d="M18 5.99998H16C16 3.78998 14.21 1.99998 12 1.99998C9.79 1.99998 8 3.78998 8 5.99998H6C4.9 5.99998 4 6.89998 4 7.99998V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.99998C20 6.89998 19.1 5.99998 18 5.99998ZM12 3.99998C13.1 3.99998 14 4.89998 14 5.99998H10C10 4.89998 10.9 3.99998 12 3.99998ZM18 20H6V7.99998H8V9.99998C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 9.99998V7.99998H14V9.99998C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 9.99998V7.99998H18V20Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_46_861">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Choice;