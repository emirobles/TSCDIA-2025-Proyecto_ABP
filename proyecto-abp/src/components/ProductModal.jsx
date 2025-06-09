import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
        <p className="text-gray-700 dark:text-gray-200 font-semibold mb-2">💵 Precio: ${product.price}</p>
        <p className="text-yellow-500 mb-2">⭐ Rating: {product.rating}</p>
        <p className="text-green-600 dark:text-green-400">📦 Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductModal;
