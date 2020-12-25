import { Card, CardDeck } from "react-bootstrap";
import useGetAPI from "./useGetAPI";
import "../weatherIcons/css/weather-icons.css";

function SevenDayForecast() {
  const api = useGetAPI();

  function tempConversion(e) {
    let j = Math.round(e * (9 / 5) - 459.67);
    return j;
  }

  if (api.status === "fetched" && api.weather.daily) {
    // Find day or night ID
    let today = new Date();
    let seconds = today.getTime() / 1000;
    let sun = "";

    if (api.weather.daily[0].weather[0].id) {
      console.log(api.weather.daily[0].weather[0].id);
      if (
        api.weather.daily[0].weather[0].id > 199 &&
        api.weather.daily[0].weather[0].id < 958
      ) {
        if (
          seconds > api.weather.current.sunrise &&
          seconds < api.weather.current.sunset
        ) {
          sun = "day-";
        } else {
          sun = "night-";
        }
      }
    }

    // Setting up Labels for forecast cards
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = '';
    let dayNumber = today.getUTCDay();
    
    for (let i = 0; i < dayNumber; i++) {
        day = week.shift();
        week.push(day);
    }
    week[0] = 'Today';

    console.log(week);
    return (
      <div className="weather">
        <h1>Seven Day</h1>
        <CardDeck>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[0]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[0].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[0].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[0].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[0].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[1]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[1].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[1].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[1].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[1].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[2]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[2].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[2].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[2].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[2].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[3]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[3].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[3].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[3].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[3].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[4]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[4].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[4].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[4].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[4].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>{week[5]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[5].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[5].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[5].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[5].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "8rem" }}>
            <Card.Body>
              <Card.Title>{week[6]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {tempConversion(api.weather.daily[6].temp.max)}
                <span>&#176;</span>
                <i
                  className={`wi wi-owm-${sun}${api.weather.daily[6].weather[0].id}`}
                ></i>
              </Card.Subtitle>
              <Card.Text>
                <div>
                  Low: {tempConversion(api.weather.daily[6].temp.min)}
                  <span>&#176;</span>
                </div>
                {api.weather.daily[6].weather[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
}

export default SevenDayForecast;
