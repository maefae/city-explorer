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
                <>
                  <p key={i}>Date: {e.date}</p>
                  <p>Forecast: {e.description}</p>
                </>
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