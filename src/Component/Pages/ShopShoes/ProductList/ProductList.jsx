import React from 'react';

import Card from '../Card/Card.jsx';

const ProductList = ({ active, shoesData, currentItems, filteredProducts }) => {

  return (
    <div className={active ? "shoes__buy active" : "shoes__buy"}>
      {currentItems.map((shoes) => {
        return (
          <Card
            id={shoes}
            shoes={shoes}
          />
        );
      })}

    </div>
  );
};

export default ProductList;