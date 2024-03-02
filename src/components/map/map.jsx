//import all necessary things for react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// Import from 'leaflet' directly
import L from "leaflet"; 
//import leaflet.css
import 'leaflet/dist/leaflet.css';

//import markerIcon
import iconImage from "../../images/icon-location.svg";

// create map component
const Map = (props) => {
    //get lat and lng from props
    const { lat, lng } = props;
    //create mapCenter with lat and ;ng
    const mapCenter = [lat, lng];

    // custom marker settings
    const customIcon = L.icon({
        iconUrl: iconImage,
        iconSize: [50, 45],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    //return the html content
    return (
        <>
            {/* create Map with center, zoom and specific style*/}
            <MapContainer center={mapCenter} zoom={25} scrollWheelZoom={false} style={{ width: "100%", height: "calc(100vh - 350px),", position:'absolute', zIndex:"-1" }} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* create Marker with custom icon and with same center as map*/}
                <Marker position={mapCenter} icon={customIcon}/>
            </MapContainer>
        </>
    );
};

export default Map;