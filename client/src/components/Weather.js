import { useEffect, useState } from 'react';
import useGeoLocation from './GeoLocation';
import axios from 'axios';

function Weather() {

    const [state, setState] = useState({
        loaded: false,
        weatherData: {}
    });

    const location = useGeoLocation();

    useEffect(() => {
        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=5500497e0005dbd316b78d67d9c3d669`;
        axios.get(weatherApi).then((res) => {
            console.log(res.data);
            const data = (res.data);
            setState({loaded: true,
            weatherData: data});
        });
    });
    return (
      <div>
        <h1>Weather comp works</h1>
        <h2>{JSON.stringify(state.weatherData.main)}</h2>
      </div>
    );
}

export default Weather;

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={10}&lon={10}&appid={5500497e0005dbd316b78d67d9c3d669}