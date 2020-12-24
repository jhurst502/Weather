import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import "../weatherIcons/css/weather-icons.css";
import { Spinner } from "react-bootstrap";

function Weather() {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { latitude: "", longitude: "" },
  });

  const [weatherApi, setWeatherApi] = useState("");

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
        setWeatherApi(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY2}`
        );
      });
    } else {
      console.log("Geolocation not availible");
    }
  }, []);

  const [weather, setWeather] = useState({});

  function tempConversion(e) {
    let j = Math.round(e * (9 / 5) - 459.67);
    return j;
  }

  useEffect(() => {
    console.log(weatherApi);
    // axios
    //   .get(weatherApi)
    //   .then((res) => {
    //     console.log(res.data);
    //     let data = res.data;
    //     setState({ weatherData: [data], loaded: true });
    //   })
    //   .catch((error) => {
    //     console.log(`Cannot Get API Data: ${error}`);
    //   });

    fetch(weatherApi)
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
      });
  }, [weatherApi]);

  let today = new Date();
  let seconds = today.getTime() / 1000;

  if (weather.current) {
    console.log(weather.current);
    let sun = "";
    if (
      weather.current.weather[0].id > 199 &&
      weather.current.weather[0].id < 958
    ) {
      if (
        seconds > weather.current.sunrise &&
        seconds < weather.current.sunset
      ) {
        sun = "day-";
      } else {
        sun = "night-";
      }
    }

    console.log(`wi wi-owm-${sun}${weather.current.weather[0].id}`);
    return (
      <div className="weather">
        <h1>
          {tempConversion(JSON.stringify(weather.current.temp))}
          <span>&#176;</span>
          <i className={`wi wi-owm-${sun}${weather.current.weather[0].id}`}></i>
        </h1>
        <h2>
          Feels Like{" "}
          {tempConversion(JSON.stringify(weather.current.feels_like))}
          <span>&#176;</span>
        </h2>
        <h3>Location: hello</h3>
        <h3>{weather.current.weather[0].description} right now</h3>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  }
}

export default Weather;
