import React, { useEffect } from 'react';

const Select = ({data, handleClick, setSizeActive}) => {

  const handleClickPages = () => {
    handleClick(data.size);
    setSizeActive(false)
  };

  useEffect(() => {

    const handleClick = () => {
      const buttonSize = document.getElementById('size');
      if (buttonSize) {
        buttonSize.click();
      }
    };

    handleClick();
  }, []);

  return ( 
    <div id='size' className="size__shoes" onClick={() => handleClickPages()}>
      <span>{data.size}</span>
    </div>
  );
};

export default Select;