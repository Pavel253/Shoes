import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentShoes } from "../../../redux/shoes/reducer";


const Select = ({data, handleClick, setSizeActive}) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClickPages = () => {
    dispatch(setCurrentShoes(data));
    history(`/${data.id}`);
    handleClick(data.size);
    setSizeActive(false)
  };

  return ( 
    <div className="size__shoes" onClick={() => handleClickPages()}>
      <span>{data.size}</span>
    </div>
  );
};

export default Select;