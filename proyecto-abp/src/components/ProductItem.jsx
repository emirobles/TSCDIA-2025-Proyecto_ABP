import React, { useState } from 'react';
import ProductModal from './ProductModal';

const ProductItem = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]" onClick={() => setShowModal(true)}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{product.title}</h3>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Precio:</span> ${product.price}</p>
      </div>
      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductItem;
