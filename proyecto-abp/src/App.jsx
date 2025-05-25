import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Explorador de Productos</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setShowStats(!showStats)}
      >
        {showStats ? 'Ocultar estadísticas' : 'Mostrar estadísticas'}
      </button>
      {showStats && <StatsPanel />}
      <ProductList products={filtered} />
    </div>
  );
}

export default App;
