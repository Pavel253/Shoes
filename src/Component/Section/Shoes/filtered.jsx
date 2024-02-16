import React from 'react';

const filtered = (shoesData) => {
  shoesData.filter(
    (product, index, self) => index === self.findIndex((p) => p.title === product.title)
  );
};

export default filtered;