import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const PriceLineChart = ({ products }) => {
  // Simular evolución de precios usando su ID como eje temporal
  const data = products.map((product, i) => ({
    name: `#${i + 1}`,
    price: product.price
  }));

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-semibold mb-4">Evolución simulada de precios</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceLineChart;
