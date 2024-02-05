import React from 'react';

const BtnColors = ({ data, activeColor, setColorFilter, setActiveColor }) => {

  const dataId = data.id
  
  const handleClick = (data) => {
    setColorFilter(dataId)
    setActiveColor(data)
  }

  return (
    <div className="btn__checkbox">
      <button className={activeColor === data.id ? "checkbox active" : "checkbox"}  onClick={() => handleClick(data.id)}>
        <div className='gal'/>
        <div className='gal'/>
      </button>
      <span className='span'>{data.color}</span>
    </div>
  );
};

export default BtnColors;