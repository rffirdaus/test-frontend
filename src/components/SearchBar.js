import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='d-flex mb-4'>
      <input
        type="text"
        className='form-control me-2'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari artikel..."
      />
      <button className='btn btn-secondary' onClick={handleSearch}>Cari</button>
    </div>
  );
};

export default SearchBar;
