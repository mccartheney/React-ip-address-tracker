// import header
import Header from "./components/header/header"

// import infoArea
import InfoArea from "./components/infoArea/infoArea";

//import map
import Map from "./components/map/map";

//import hooks
import { useEffect } from "react";
import { useState } from "react";

// import acios
import axios from "axios";

// create App
const App = () => {
    // get api key from .env
    const apiKey = process.env.REACT_APP_API_KEY ;

    // create state hook for IP
    const [IP, setIP] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [isp, setIsp] = useState("");

    //use Effect foe when the pogram start
    useEffect(() => {
        //get user IP from api
        axios.get("https://api.ipify.org/?format=json")
            .then(response => {
                // get IP and setIP as IP
                setIP(response.data.ip);
            })

    }, [])

    // create hooks for lat and lng (cordinates)
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    //use Effect foe when the pogram start or when IP hook changes
    useEffect(() => {
        // get ip info from ipify Api
        axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${IP}`)
            .then(response => {
                // set cordinates
                setLat(response.data.location.lat);
                setLng(response.data.location.lng);
                setRegion(response.data.location.region);
                setCity(response.data.location.city);
                setPostalCode(response.data.location.postalCode);
                setTimeZone(response.data.location.timezone);
                setIsp(response.data.isp);
            })

    }, [IP])

    // verify is cordinates is loaded
    if ((lat && lng)) { // if it is 
        return( // return page
            <>
                {/* header component */}
                <Header setIP={setIP}/>

                {/* infoArea Component */}
                <InfoArea IP={IP} region={region} city={city} timeZone={timeZone} postalCode={postalCode} isp={isp}/>

                {/*map component  */}
                <Map lat={lat} lng={lng}/>
            </>
        )
    }else { //if it does not return loading page
        return (
            <>
                <h1>
                    Loading maps and cordinades
                </h1>
            </>
        )
    }
}

export default App;