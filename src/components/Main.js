import React from "react";
import axios from 'axios';
import '../App.css';
import CityCard from "../components/CityCard";
import CityForm from "../components/CityForm";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      displayCard: false,
      errorMessage: '',
      cityMap: ''
    };
  }

  handleInput = (e) => {
    this.setState({ searchQuery: e.target.value });
    console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    console.log(this.state.searchQuery);

    e.preventDefault();
    this.setState({ error: false });
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      // console.log(response.data[0]);
      this.setState({ 
        location: response.data[0],
        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12`,
        displayCard: true,
      });
      
      //Error caught here
     } catch (error) {
      // console.log(error)
      this.setState({ 
        error: true,
        displayCard: false,
      });
      this.setState({ errorMessage: error.message });
    }
    // e.target.reset();
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
        />
        <CityCard 
          displayCard ={this.state.displayCard}
          location={this.state.location}
          cityMap={this.state.cityMap}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
        />
      </>
    );
  }
}

// https://locationiq.com/docs-html/index.html#static-maps
// https://maps.locationiq.com/v3/staticmap?key=76a8dfbd6f55bf&center=47.6038321,-122.3300624&zoom=13

export default Main;
 