const FilterBar = ({ categories, selectedCategory, setSelectedCategory, sortOption, setSortOption }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
      >
        <option value="">Todas las categorías</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
      >
        <option value="">Sin orden</option>
        <option value="price-asc">Precio ↑</option>
        <option value="price-desc">Precio ↓</option>
        <option value="rating-asc">Rating ↑</option>
        <option value="rating-desc">Rating ↓</option>
      </select>
    </div>
  );
};

export default FilterBar;
