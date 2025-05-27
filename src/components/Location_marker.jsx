import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import volcanoIcon from '../images/volcano.svg'
import icebergIcon from '../images/iceberg.svg';

const Location_marker = ({ lat, lng, onClick,categoryId }) => {
  let icon;

  switch (categoryId) {
    case 'volcanoes':
      icon = <img src={volcanoIcon} alt="Volcano" style={{ width: '5rem', height: '5rem' }} />;
      break;
    case 'seaLakeIce':
      icon = <img src={icebergIcon} alt="Iceberg" style={{ width: '5rem', height: '5rem' }} />;
      break;
    case 'wildfires':
    default:
      icon = <Icon icon={fireIcon} style={{width: '5rem', color: 'red' }} />;
  }

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
      {icon}
    </div>
  );
};

export default Location_marker;

