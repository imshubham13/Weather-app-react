import { createContext, useContext, useState } from "react";
import { getWheatherDataForCity, getWheatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

// For Read 
export const useWheather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    // Actual data fetch
    const fetchData = async () => {
        const response = await getWheatherDataForCity(searchCity);
        setData(response);
    }

    // Fetch current location
    const fetchCurrentUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWheatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude).then(data => setData(data));
            console.log(position);
        });
    }

    return (
        <WeatherContext.Provider value={{ data, searchCity, setSearchCity, fetchData, fetchCurrentUserLocation }}>
            {props.children}
        </WeatherContext.Provider>
    );
}

// export default WeatherContext;