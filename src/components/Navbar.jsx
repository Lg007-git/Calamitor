import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="navbar" style={{ zIndex: '100', backgroundColor: 'red', display: 'flex', height: '43px', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ padding: '12px 10px' }}>Calamitor</div>
      <div className="searchbox" style={{ padding: '12px 10px' }}>
        <input
          type="text"
          placeholder="Search the country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Navbar;