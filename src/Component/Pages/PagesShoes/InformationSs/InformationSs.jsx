import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";
import {
  deleteItemFromCart,
  setItemInCart,
} from "../../../../redux/cart/reducer";
import colorId from "../../ShopShoes/Product/color";
import Select from "../Select";

const InformationSs = ({ shoes, shoesData, size }) => {
  const dispatch = useDispatch();
  const [sizeData, setSizeData] = useState(shoes.size)
  const [sizeActive, setSizeActive] = useState(false)

  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === shoes.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(shoes.id));
    } else {
      dispatch(setItemInCart(shoes));
      <h2 className="title__shoes">{shoes.title}</h2>;
    }
  };

  const handleClickSize = (id) => {
    setSizeData(id)
  }
  const ClickSizeActive = () => {
    setSizeActive(!sizeActive)
  }

  const filteredProducts = shoesData.filter(product => {
    return (
      (shoes.title === product.title & product.id > 0)
    );
  });

  return (
    <div className="title__ss">
      <h2 className="title">{shoes.title}</h2>
      <div className="ss__price">
        <span className="price">{shoes.price} $</span>
        <span className="price ss__Installment">Installment for 6 months</span>
      </div>
      <div className="ss__color">
        <h5 className="title__h5">Color</h5>

        <div className="container__ss">

          <button className="color__shoes">
            <span className={`circle__color ${colorId(shoes.color)}`} />
            <span className="span__categories">{colorId(shoes.color)}</span>
          </button>

          {shoes.color1 && <button className="color__shoes">
            <span className={`circle__color ${colorId(shoes.color1)}`} />
            <span className="span__categories">{colorId(shoes.color1)}</span>
          </button>}

          {shoes.color2 && <button className="color__shoes">
            <span className={`circle__color ${colorId(shoes.color2)}`} />
            <span className="span__categories">{colorId(shoes.color2)}</span>
          </button>}

        </div>
      </div>

      <div className="ss__size">
        <span className="span__title">Choose a size:</span>

        <div className={sizeActive ? "select__size active" : "select__size"}>

          <div className="main__size">
            <span className="size">{sizeData}</span>
            <div className="line"></div>
            <svg onClick={() => ClickSizeActive(!sizeActive)} className={sizeActive ? "svg active" : "svg"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="black"></path></svg>
          </div>
          <div className={sizeActive ? "menu__size active" : "menu__size"}>
            {filteredProducts.map((data) => {
              return <Select setSizeActive={setSizeActive} handleClick={handleClickSize} data={data} />
            })}
          </div>

        </div>

      </div>

      <button className="btn" onClick={handleClick}>
        {isItemInCart ? "Remove from cart" : "To cart"}
      </button>
    </div>
  );
};

export default InformationSs;
