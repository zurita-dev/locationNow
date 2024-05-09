import "./App.css";
import { useState } from "react";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h2>GeoLocation</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <button onClick={getLocation}>Get Location</button>
    </div>
  );
}

export default App;
