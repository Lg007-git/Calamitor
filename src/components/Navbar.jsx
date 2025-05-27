import React, { useState } from 'react';

function Navbar({ onSearch, selectedCalamity, onCalamityChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="navbar" style={{ zIndex: '100', backgroundColor: 'red', display: 'flex', height: '43px', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ padding: '12px 10px', color: 'white', fontWeight: 'bold',fontSize: '25px' }}>Calamitor</div>
    <div style={{display:'flex'}}>


    <div className="Calamitybox" style={{ padding: '1rem 1rem' }}>
      <select name="selectedCalamity" value={selectedCalamity} onChange={(e) => onCalamityChange(e.target.value)}>
        <option value="WildFires">WildFire</option>
        <option value="SeaLakeIce">Sea Lake Ice</option>
        <option value="volcanoes">volcanoes</option>
      </select>
      </div>

      <div className="searchbox" style={{ padding: '1rem 1rem' }}>
        <input
          type="text" 
          placeholder="Search the country"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
    </div>
  );
}

export default Navbar;  