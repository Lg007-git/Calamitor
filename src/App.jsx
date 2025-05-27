import { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCalamity, setSelectedCalamity] = useState("wildfires");
  const [center, setCenter] = useState({ lat: 27.56614, lng: 76.608678 });
  const [Zoom, setZoom] =useState(3);

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
    const apiKey = '47677b6c5f434053a425e376dfa88103';
    const url = `https://api.geoapify.com/v1/geocode/search?text=${country}&apiKey=${apiKey}`;
    console.log("url");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.group("data");
      console.log(data);
      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].geometry.coordinates;

    const lng = coordinates[0];
    const lat = coordinates[1];
        setCenter({ lat, lng });
        console.log(`lat:${lat} log:${lng}`);
        setZoom(6);
      } else {
        alert(`Country not found.${country}`);
      }
    } catch (error) {
      console.error("Error fetching country coordinates:", error);
    }
  };

  return (
    <>
      {!loading ? (
        <>
          <Navbar onSearch={handleSearch} selectedCalamity={selectedCalamity} onCalamityChange={setSelectedCalamity}/>
          <Map eventData={eventData} center={center} zoom={Zoom} calamityFilter={selectedCalamity}/>
        </>
      ) : (
        <h1><Loader /></h1>
      )}
    </>
  );
}

export default App;