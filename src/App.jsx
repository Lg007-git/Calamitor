import { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import Loader from './components/Loader';
import Cookies from 'js-cookie';
import Navbar from './components/Navbar';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);


  
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      
      const cachedData = Cookies.get('eventData');
      if (cachedData) {
        // If cached data exists, use it to improve response time
        setEventData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        // Fetch data if not in cookies
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
        const { events } = await res.json();
        setEventData(events);
        Cookies.set('eventData', JSON.stringify(events), { expires: 1 }); // Store in cookies for 1 day
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
    
      {!loading ?<> <Navbar /> <Map eventData={eventData} /> </> : <h1><Loader /></h1>}
    </>
  );
}

export default App;
