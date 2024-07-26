import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"


export default function Map() {
    return (
        <MapContainer 
            className="leaflet-container h-screen"
            center={[0, 0]}
            zoom={2}
            scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
            />
        </MapContainer>
    );
}