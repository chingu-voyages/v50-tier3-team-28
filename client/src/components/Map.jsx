import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import mapData from './mapData';
import greenBeeIconUrl from '../assets/icons/green-bee.png';
import redBeeIconUrl from '../assets/icons/red-bee.png';

const greenBeeIcon = new Icon({
  iconUrl: greenBeeIconUrl,
  iconSize: [35, 35]
});

const redBeeIcon = new Icon({
  iconUrl: redBeeIconUrl,
  iconSize: [35, 35]
});

export const Map = () => {
  return (
    <MapContainer
      className="leaflet-container w-[150rem] h-[25rem] z-0"
      center={[0, 0]}
      zoom={2}
      minZoom={2}
      // scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData.map(marker => (
        <Marker
          key={marker.id}
          position={[marker.coordinates.latitude, marker.coordinates.longitude]}
          icon={marker.status ? greenBeeIcon : redBeeIcon}>
          <Popup>
            <div>
              <h2 className="text-center underline mb-1"> {marker.country} </h2>
              <div>
                <span className="underline">City</span>: {marker.city}
              </div>
              <div>
                <span className="underline">Latitude</span>:
                {marker.coordinates.latitude}
              </div>
              <div>
                <span className="underline">Longitude</span>:
                {marker.coordinates.longitude}
              </div>
              <div>
                <span className="underline">Status</span>:
                {marker.status ? 'Saved' : 'Found'}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
