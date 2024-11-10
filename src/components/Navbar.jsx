import React from 'react'

function Navbar() {
  return (
    <div clasName="navbar" style={{ zIndex:'100',backgroundColor: 'red',display:'flex',height:'43px',justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{padding:'12px 10px'}}>Calamitor </div>
        <div className="searchbox" style={{padding:'12px 10px'}}>
        <input type="text" placeholder="Search the country" />
        </div>
        
    </div>
  )
}

export default Navbar