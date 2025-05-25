import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="mb-4">
        <input
            type="text"
            placeholder="Buscar productos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
        />
    </div>
  );
};

export default SearchBar;
