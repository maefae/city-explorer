import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 
import './App.css';
import Weather from "./components/Weather";
// import Movies from "./components/Movies"


class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/style-prop-object
      <div className="has-bg-img w-100 p-3 mx-auto 200">
        <Header />
        <img className="bg-img" src="" alt=""></img>
        <Main />
        <Weather />
        {/* <Movies /> */}
        <Footer />
      </div>
    );
  };
};

export default App;