import { useEffect, useState } from "react";
import axios from "axios";
import './Weather.css';
import '../weatherIcons/css/weather-icons.css'

function Weather() {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { latitude: "", longitude: "" },
  });

  // const getLocation = async () => {
  //   if('geolocation' in navigator) {
  //     const c = await navigator.geolocation.getCurrentPosition();
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLocation({
  //         loaded: true,
  //         coords: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         },
  //       });
  //     })
  //   } else {
  //     console.log("Geolocation not availible");
  //   }
  // }

  const [weatherApi, setWeatherApi] = useState('');

  const getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log(getPosition());
      getPosition().then((position) => {
        console.log(position.coords);
        setLocation({
          loaded: true,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        setWeatherApi(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY2}`);
      });
    } else {
      console.log("Geolocation not availible");
    }
  }, []);
  
  const [state, setState] = useState({
    loaded: false,
    weatherData: {},
  });

  function tempConversion(e) {
    let j = Math.round(e * (9 / 5) - 459.67);
    return j;
  }

  useEffect(() => {
    console.log(weatherApi);
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
  }, [weatherApi]);



  if (state.weatherData.main) {
    return (
      <div className='weather'>
        <h1>{tempConversion(JSON.stringify(state.weatherData.main.temp))}
        <span>&#176;</span>
        <i className={`wi wi-owm-${state.weatherData.weather[0].id}`}></i>
        </h1>
        <h2>Feels Like {tempConversion(JSON.stringify(state.weatherData.main.feels_like))}</h2>
      </div>
    )
  } else {
    return (
      <h1>API data cannot be found :(</h1>
    )
  }
}

export default Weather;
