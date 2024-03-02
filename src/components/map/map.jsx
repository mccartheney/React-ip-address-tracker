// import things to leaflet
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// import image for marker
import iconImage from "../../images/icon-location.svg";

// import hooks from react
import { useEffect, useState } from 'react';

// create Map Component
const Map = (props) => {
    // get cordinates from props
    const { lat, lng } = props;

    // create MapCenter state to change the map center
    const [mapCenter, setMapCenter] = useState([lat, lng]);

    // custom icon settings
    const customIcon = L.icon({
        iconUrl: iconImage,
        iconSize: [50, 45],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    // useEffect trigger on start and when coordinates update
    useEffect(() => {
        // update MapCenter
        setMapCenter([lat, lng]);
    }, [lat, lng]);

    // return Map HTML
    return (
        <>
            <MapContainer center={mapCenter} zoom={25} scrollWheelZoom={false} style={{ width: "100%", height: "calc(100vh - 350px),", position: 'absolute', zIndex: "-1" }} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapCenter} icon={customIcon} />
            </MapContainer>
        </>
    );
};

export default Map;