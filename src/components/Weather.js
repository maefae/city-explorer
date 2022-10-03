import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather && (
          <Container>
            <h3>Weather</h3>
            <div>
              {this.props.weatherData.map((day, index) => {
                return (
                  <WeatherDay
                    date={day.date}
                    description={day.description}
                    key={index}
                  />
                );
              })}
            </div>
          </Container>
        )}
      </>
    );
  }
}

export default Weather;
