import React, { useState } from "react";
import "./FilterBtn.scss";
import { setCurrentShoes } from "../../../../redux/shoes/reducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FilterBtn = ({ collection, shoesData, setData }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentShoes(shoesData));
    history(`/cat:all`);
    setData(shoesData)
  };

  return (
    <ul className="filter__ul">
      <h6 className="title__ul">Type</h6>
      <li>
        <button
          className="btn__filter filter__btn-all"
          onClick={handleClick}
        >
          All
        </button>
        <Cat collection={collection} shoes={shoesData} />
      </li>
    </ul>
  );
};

const Cat = ({ shoes, collection }) => {
  
  const history = useNavigate();
  const dispatch = useDispatch();

  const [itemId, setItemId] = useState('all')



  const handleClick = item => {
    dispatch(setCurrentShoes(shoes));
    history(`/cat:${itemId}`);
    setItemId(item)
  };

  return (
    <div>
      {collection.map((item) => (
        <li>
          <button className="btn__filter" onClick={() => handleClick(item)}>
            {item}
          </button>
        </li>
      ))}
    </div>
  );
};

export default FilterBtn;
