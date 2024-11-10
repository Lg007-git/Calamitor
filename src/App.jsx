import { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [center, setCenter] = useState({ lat: 27.56614, lng: 76.608678 });

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const handleSearch = async (country) => {
    const apiKey = '28e1b3c726bf4d3086dc3d2fb93ce3ef';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setCenter({ lat, lng });
        setZoom(6);
      } else {
        alert("Country not found.");
      }
    } catch (error) {
      console.error("Error fetching country coordinates:", error);
    }
  };

  return (
    <>
      {!loading ? (
        <>
          <Navbar onSearch={handleSearch} />
          <Map eventData={eventData} center={center} />
        </>
      ) : (
        <h1><Loader /></h1>
      )}
    </>
  );
}

export default App;