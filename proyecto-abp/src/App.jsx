import React, { useEffect, useState} from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import StatsPanel from './components/StatsPanel';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  let filtered = products
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    .filter(p => selectedCategory === '' || p.category === selectedCategory);

  if (sortOption === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating-asc') {
    filtered.sort((a, b) => a.rating - b.rating);
  } else if (sortOption === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Explorador de Productos</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button> 
        </div>
        <SearchBar query={query} setQuery={setQuery} />
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <button
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowStats(!showStats)}
          >
            {showStats ? 'Ocultar estadísticas' : 'Mostrar estadísticas'}
        </button>
        {showStats && <StatsPanel products={filtered} />}
        <ProductList products={filtered} />
      </div>
    </div>
  );
}

export default App;
