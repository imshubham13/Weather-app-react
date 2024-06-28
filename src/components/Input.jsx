import React from "react";
import { useWheather } from "../context/WheatherContext";

const Input = () => {

    const weather = useWheather();

    return (
        <>
            <input
                className="input-field"
                placeholder="Search here"
                value={weather.seachCity}
                onChange={(e) => weather.setSearchCity(e.target.value)}
            />
        </>
    );
}

export default Input;