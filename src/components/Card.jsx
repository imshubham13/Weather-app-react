import React from "react";
import { useWheather } from "../context/WheatherContext";

const Card = () => {
    const weather = useWheather();
    return (
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="" />
            <h2>{weather.data?.current?.temp_c}. C</h2>
            <h5>{weather.data?.location?.name},
                {weather.data?.location?.region},
                {weather.data?.location?.country}
            </h5>
        </div>
    );
}

export default Card;