import React from 'react';

const FilterBtn = ({ onClick }) => {
  return (
    <button variant="contained" color="primary" onClick={onClick}>
      Применить фильтры
    </button>
  );
};

export default FilterBtn;