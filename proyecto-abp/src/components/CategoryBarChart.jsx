import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const CategoryBarChart = ({ products }) => {
  // Contar productos por categoría
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  // Convertir a formato que Recharts puede usar
  const data = Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count
  }));

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-semibold mb-4">Cantidad de productos por categoría</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ bottom: 70 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="category"
            angle={-30}
            textAnchor="end"
            interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3B82F6" barSize={50}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryBarChart;