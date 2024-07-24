import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import mapData from "./mapData";

export default function Map() {
    return (
        <MapContainer 
            className="leaflet-container w-[150rem] h-[25rem]"
            center={[0, 0]}
            zoom={2}
            // scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
            />
            {mapData.map(marker => (
                <Marker position={[marker.coordinates.latitude, marker.coordinates.longitude]}>
                </Marker>
            ))
            }
        </MapContainer>
    );
}