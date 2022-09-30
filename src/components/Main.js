import React from "react";
import axios from "axios";
import "../App.css";
import CityCard from "../components/CityCard";
import CityForm from "../components/CityForm";
import Weather from "../components/Weather";
// import Movies from "./Movies";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      error: false,
      displayCard: false,
      errorMessage: "",
      cityMap: "",
      weatherData: [],
      movieData: [],
      displayWeather: false,
      lat: "",
      lon: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    console.log(e.target.value)
  };

  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({ error: false });
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      
      this.setState({
        location: response.data[0].display_name,
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12`,
        displayCard: true,
        searchQuery: "",
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      });
      this.handleWeather(response.data[0].lat, response.data[0].lon);
      // console.log(this.state.location);
      // this.handleMovies();

      //Error caught here
    } catch (error) {
      this.setState({
        error: true,
        displayCard: false,
      });
      this.setState({ errorMessage: error.message });
    }
    this.handleWeather();
  };

  handleWeather = async (lat, lon) => {
    try {
      //  console.log(this.state.searchQuery);
      const API = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${lat}&lon=${lon}`;
      const weatherRes = await axios.get(API);
      // console.log(weatherRes);
      this.setState({
        weatherData: weatherRes.data,
        displayWeather: true,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        displayWeather: false,
      });
      this.setState({ displayCard: false });
      this.setState({
        errorMessage: error.response.status + error.message + "",
      })
    }
  }

  handleMovies = async () => {
    try {
      const API = `${process.env.REACT_APP_MOVIE_API_KEY}/movies?searchQuery=${this.state.searchQuery}`;
      const movieRes = await axios.get(API);
      this.setState({
        movieData: movieRes.data,
        displayMovies: true,
      });
    } catch (error) {
      this.setState({
        error: true,
        displayMovies: false,
      });
      this.setState({ displayCard: false, });
      this.setState({ errorMessage: error.response.status + error.message + "" });
    }
  }

  render() {
    return (
      <>
        <CityForm
          handleInput={this.handleInput}
          handleSearch={this.handleSearch}
          location={this.state.location}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
          searchQuery={this.state.searchQuery}
        />
        <CityCard
          displayCard={this.state.displayCard}
          location={this.state.location}
          lat={this.state.lat}
          lon={this.state.lon}
          cityMap={this.state.cityMap}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
        />
        <Weather
          weatherData={this.state.weatherData}
          displayWeather={this.state.displayWeather}
        />
      </>
    );
  }
}

// https://locationiq.com/docs-html/index.html#static-maps
// https://maps.locationiq.com/v3/staticmap?key=76a8dfbd6f55bf&center=47.6038321,-122.3300624&zoom=13

export default Main;
