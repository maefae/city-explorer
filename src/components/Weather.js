import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.displayWeather &&
        <Container>
          <h5>Weather for {this.props.location.display_name}</h5>
          <p>Forecast: {this.props.weatherData.weather.description}</p>
          <p>Temperature: {this.props.weatherData.temp}</p>
        </Container>
        }
      </>
    )
  }
}

export default Weather;

// Jumpstart on Lab 08 possible solution
// class Weather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       weatherData: {},
//       displayWeather: false,
//       error: false,
//       errorMessage: '',
//     }
//   }

//   getWeather = async (event) => {
//     event.preventDefault();
//     try {
//       const weatherURL = `https://us1.locationiq.com/v1/current.json?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.props.location.lat},${this.props.location.lon}&format=json`;
//       const weatherResponse = await axios.get(weatherURL);
//       this.setState({
//         weatherData: weatherResponse.data,
//         displayWeather: true,
//       });
//     } catch (error) {
//       this.setState({
//         error: true,
//         displayWeather: false,
//       });
//       this.setState({ errorMessage: error.message });
//     }
//   }