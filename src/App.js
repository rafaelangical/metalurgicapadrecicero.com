import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs';
import Contacts from './Components/Contact/Contacts';
import Projects from './Components/Projects/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <AboutUs />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
