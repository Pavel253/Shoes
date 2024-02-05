import React from 'react';

const BtnCheckbox = ({setSizeFilter, handleSizeClick, setActiveSize, activeSize, data}) => {

  const dataId = Number(data.size)
  
  const handleClick = (data) => {
    setSizeFilter(dataId)
    setActiveSize(data)
  }

  return (
    <div className="btn__checkbox">
      <button className={activeSize === data.id ? "checkbox active" : "checkbox"}  onClick={() => handleClick(data.id)}>
        <div className='gal'/>
        <div className='gal'/>
      </button>
      <span className='span'>{data.size}</span>
    </div>
  );
};

export default BtnCheckbox;