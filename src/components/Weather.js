import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather &&
        <Container>
       <h3>Weather</h3>
          <div>
            {this.props.weatherData.map((e, i) => {
              return (
                <div key={i}>
                  <p>Date: {e.date}</p>
                  <p>Forecast: {e.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
        }
      </>
    )
  }
}

export default Weather;