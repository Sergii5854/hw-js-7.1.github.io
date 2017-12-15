import React, {Component} from 'react';


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

    );
  }
}

export default App;
