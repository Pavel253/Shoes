import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  deleteItemFromCart,
  setItemInCart,
} from "../../../../redux/cart/reducer";

const options = [
  { value: "45", label: "45" },
  { value: "44", label: "44" },
  { value: "43", label: "43" },
];

const InformationSs = ({ shoes }) => {
  const [selectedOption, setSelectedOption] = useState([1]);
  const dispatch = useDispatch();

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
          <button className="input__categories" htmlFor="">
            <span className="circle__color" />
            <span className="span__categories">Black</span>
          </button>

          <button className="input__categories" htmlFor="">
            <span className="circle__color" />
            <span className="span__categories">While</span>
          </button>

          <button className="input__categories" htmlFor="">
            <span className="circle__color" />
            <span className="span__categories">Red</span>
          </button>

          <button className="input__categories" htmlFor="">
            <span className="circle__color" />
            <span className="span__categories">Blue</span>
          </button>
        </div>
      </div>

      <form className="ss__size">
        <span className="span__title">Choose a size:</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </form>

      <button className="btn" onClick={handleClick}>
        {isItemInCart ? "Remove from cart" : "To cart"}
      </button>
    </div>
  );
};

export default InformationSs;
