import { useState,useEffect } from 'react'
import './App.css'
import Map from './components/Map';
import Loader from './components/Loader'

function App() {
  

  const [eventData,setEventData]=useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res =await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events }=await res.json()
      setEventData(events)
      setLoading(false) 

    }
    fetchEvents()
    console.log(eventData);
},[])

  return (
    <>
      { !loading ? <Map eventData={eventData} /> : <h1><Loader /></h1> }
    </>
  )
}

export default App
