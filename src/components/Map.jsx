import GoogleMapReact from 'google-map-react';
import Location_marker from './Location_marker';

const Map = ({eventData, center = { lat: 27.56614, lng: 76.608678 }, zoom = 3 }) => {
    const markers=eventData.map(e=>{
        if(e.categories[0].id==="wildfires"){
            return <Location_marker lat={e.geometry[0].coordinates[1]} lng={e.geometry[0].coordinates[0]} />
        }
        return null;
    })

  return (
    <div className="map" >
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API ,language: 'en'}} 
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;
