import { useEffect, useState } from "react";
import "./Weather.css";
import "../weatherIcons/css/weather-icons.css";
import { Spinner } from "react-bootstrap";
import useGetAPI from './useGetAPI';

function Weather() {

  function tempConversion(e) {
    let j = Math.round(e * (9 / 5) - 459.67);
    return j;
  }

  const api = useGetAPI();
  let weather = api.weather;

  useEffect(() => {
    //console.log(location);
    console.log(api);
},[api]);

  // Find day or night ID
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
