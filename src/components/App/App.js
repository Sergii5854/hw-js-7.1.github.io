import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom'

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

              <Route exact path='/' component={Hero}/>
              <Route path='/Services' component={Services}/>
              <Route path='/Team' component={Team}/>
              <Route path='/Portfolio' component={Portfolio}/>
              <Route path='/News' component={News}/>
              <Route path='/Contact' component={Contact}/>

              {/*<Route path='*' render={(match) => {*/}
              {/*console.log('arguments', match);*/}
              {/*if (match.location.pathname === '/team') {*/}
              {/*return (*/}
              {/*<Redirect to='/our-team'/>*/}
              {/*)*/}
              {/*}*/}
              {/*return (*/}
              {/*<div>Page not found</div>*/}
              {/*)*/}
              {/*}}/>*/}
            {/*<Hero />*/}
            {/*<Services />*/}
            {/*<Portfolio />*/}
            {/*<Team/>*/}
            {/*<News />*/}
            {/*<Contact />*/}
            {/*<Footer />*/}
          </div>
        </HashRouter>
    );
  }
}

export default App;
