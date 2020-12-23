import { useEffect, useState } from "react";
import useGeoLocation from "./GeoLocation";
import axios from "axios";

function Weather() {
  const [state, setState] = useState({
    loaded: false,
    weatherData: {},
  });

  const [convertedData, setConvertedData] = useState({
    temperature: 0,
    feelsLike: 0,
  });

  const tempConversion = (e) => {
    return (e * (9 / 5) - 459.67);
  };

  let location = useGeoLocation();
  console.log(location);

  useEffect(() => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY2}`;
    console.log(weatherApi);

    const getRequest = () => {
      axios
        .get(weatherApi)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setState({ loaded: true, weatherData: data });
        })
        .catch((error) => {
          console.log(`Cannot Get API Data: ${error}`);
        });
    };

    if (location.loaded === true) {
      getRequest();
      let f = tempConversion(state.weatherData.main);
      setConvertedData({temperature: f});
      console.log(`convert temp ${convertedData.temperature}`)
    }
  }, []);

  return (
    <div>
      <h1>Weather comp works</h1>
      <h2>
        {state.loaded
          ? JSON.stringify(state.weatherData.main)
          : "API Data Cannot Be Found"}
      </h2>
      <h2>{convertedData.temperature}</h2>
    </div>
  );
}

export default Weather;
