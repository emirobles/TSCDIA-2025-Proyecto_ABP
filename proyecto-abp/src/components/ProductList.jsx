import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-red-500">No se encontraron productos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
