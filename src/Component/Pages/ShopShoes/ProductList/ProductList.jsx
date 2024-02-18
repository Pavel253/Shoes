import React from 'react';

import Card from '../Card/Card.jsx';

const ProductList = ({ active, setModalActive, currentItems, modalActive }) => {

  return (
    <div className={active ? "shoes__buy active" : "shoes__buy"}>
      {currentItems.map((shoes) => {
        return (
          <Card
            id={shoes}
            shoes={shoes}
            active={modalActive}
            setActive={setModalActive}
          />
        );
      })}

    </div>
  );
};

export default ProductList;