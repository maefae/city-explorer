import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <div key={this.props.key}>
        <p>Date: {this.props.date}</p>
        <p>Forecast: {this.props.description}</p>
      </div>
    );
  }
}

export default WeatherDay;
