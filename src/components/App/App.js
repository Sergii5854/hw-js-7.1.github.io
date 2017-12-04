import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css'

import Header from "./../header/header";
import Hero from "./../hero/hero";
import Services from "./../services/services";
import Portfolio from "./../portfolio/portfolio";
import Team from "./../team/team";
import News from "./../news/news";
import Contact from "./../contact/contact";
import Footer from "./../footer/footer";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Team/>
            <News />
            <Contact />
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default App;
