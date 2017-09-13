import React, { Component } from 'react';
import '../App.css';
import NavBar from './navbar.js';
import Header from './header.js';
import Section from './section.js';
import Form from './form.js';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
