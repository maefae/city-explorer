import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Mainphotos from './Mainphotos'; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Mainphotos /> 
        <Footer />
      </>
    );
  }
}
export default App;
 