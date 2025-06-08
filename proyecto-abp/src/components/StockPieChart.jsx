import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const StockPieChart = ({ products }) => {
  const stockHigh = products.filter(p => p.stock > 50).length;
  const stockLow = products.length - stockHigh;

  const data = [
    { name: 'Stock > 50', value: stockHigh },
    { name: 'Stock ≤ 50', value: stockLow }
  ];

  const COLORS = ['#6366F1', '#1E3A8A'];

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-semibold mb-4">Distribución por stock</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockPieChart;
