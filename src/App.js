import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import Sections from './Components/Sections';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sections />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
