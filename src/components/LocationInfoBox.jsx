import React from 'react'

function LocationInfoBox({ info }) {
    console.log('info.id:', info.id);
  console.log('info.title:', info.title);
  return (
    <div className="location-info">
        <h2>Event location Info</h2>
        <ul>
            <li>ID:<strong>{info.id}</strong></li>
            <li>TITLE:<strong>{info.title}</strong></li>
        </ul>
    </div>
  )
}

export default LocationInfoBox