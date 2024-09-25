import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Location_marker = ({ lat, lng, onClick }) => {
  return (
    <div 
      className="location-marker" 
      lat={lat}
      lng={lng}
      onClick={onClick} 
      style={{
        position: 'absolute', 
        transform: 'translate(-50%, -100%)' }}
    >
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default Location_marker;
