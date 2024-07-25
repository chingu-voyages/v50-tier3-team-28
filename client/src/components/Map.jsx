import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import mapData from "./mapData";
import greenBeeIconUrl from "../assets/icons/green-bee.png";
import redBeeIconUrl from "../assets/icons/red-bee.png";

const greenBeeIcon = new Icon({
    iconUrl: greenBeeIconUrl,
    iconSize: [35, 35]
});

const redBeeIcon = new Icon({
    iconUrl: redBeeIconUrl,
    iconSize: [35, 35]
});

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
                <Marker
                    position={[marker.coordinates.latitude, marker.coordinates.longitude]}
                    icon={marker.status ? greenBeeIcon : redBeeIcon}
                    >
                </Marker>
            ))
            }
        </MapContainer>
    );
}