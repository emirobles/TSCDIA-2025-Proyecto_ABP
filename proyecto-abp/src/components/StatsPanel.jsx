import React from 'react';

const StatsPanel = ({ products }) => {
  if (!products.length) return null;

  const prices = products.map(p => p.price);
  const ratings = products.map(p => p.rating);

  const avgPrice = (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const avgRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2);

  const highStock = products.filter(p => p.stock > 50).length;
  const highRating = products.filter(p => p.rating > 4.5).length;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
      <h2 className="text-lg font-semibold mb-3">Estadísticas Generales</h2>
      <ul className="space-y-1 text-sm">
        <li>💰 Precio promedio: <strong>${avgPrice}</strong></li>
        <li>📈 Precio máximo: <strong>${maxPrice}</strong></li>
        <li>📉 Precio mínimo: <strong>${minPrice}</strong></li>
        <li>⭐ Promedio de rating: <strong>{avgRating}</strong></li>
        <li>📦 Productos con stock &gt; 50: <strong>{highStock}</strong></li>
        <li>🌟 Productos con rating &gt; 4.5: <strong>{highRating}</strong></li>
      </ul>
    </div>
  );
};

export default StatsPanel;
