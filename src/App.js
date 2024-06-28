import './App.css';

import Input from './components/Input';
import Button from './components/Button';
import Card from "./components/Card";
import { useWheather } from './context/WheatherContext';
import { useEffect } from "react";

function App() {

  const weather = useWheather();
  console.log(weather);

  useEffect(() => {
    // Get current location
    weather.fetchCurrentUserLocation();
  }, []);

  return (
    <div className="App">
      <h1>Wheather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;


