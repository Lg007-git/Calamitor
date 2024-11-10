import GoogleMapReact from 'google-map-react';
import Location_marker from './Location_marker';
import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';

const Map = ({ eventData, center, zoom = 3 }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData
    .filter((e) => e.categories[0].id === "wildfires")
    .map((e) => (
      <Location_marker
        key={e.id}
        lat={e.geometry[0].coordinates[1]}
        lng={e.geometry[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: e.id, title: e.title })}
      />
    ));

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API, language: 'en' }}
        center={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;