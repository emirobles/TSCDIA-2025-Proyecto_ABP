import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border rounded p-2 w-full mb-4"
    />
  );
};

export default SearchBar;
