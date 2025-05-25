import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductItem;
