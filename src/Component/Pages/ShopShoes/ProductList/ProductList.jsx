import React from 'react';

import Card from '../Card/Card.jsx';

const ProductList = ({ active, filteredProducts }) => {

  return (
    <div className={active ? "shoes__buy active" : "shoes__buy"}>
      {filteredProducts.map((shoes) => {
        return (
          <Card
            id={shoes.id}
            shoes={shoes}
          />
        );
      })}

    </div>
  );
};

export default ProductList;