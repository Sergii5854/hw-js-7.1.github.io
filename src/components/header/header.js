import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import './header.css'

import logo from './logo.png'

import Hero from "./../hero/hero";
import Services from "./../services/services";
import Portfolio from "./../portfolio/portfolio";
import Team from "./../team/team";
import News from "./../news/news";
import Contact from "./../contact/contact";

export default class Header extends Component {
  render() {
    return (
        <section className="header">
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo'/>
            <h1><span className='logo'>Pro</span>Jex</h1>
            <h2>One Page Business Theme</h2>
          </header>
          <nav className='nav'>
            <NavLink exact
                     activeClassName='active'
                     to='/'
                     activeStyle={{
                       fontWeight: 'bold',
                       color: '#777'
                     }}
            >Home</NavLink>
            <NavLink activeClassName='active' to='/Services' activeStyle={{
              fontWeight: 'bold',
              color: '#777'
            }}>Services</NavLink>
            <NavLink activeClassName='active' to='/Team' activeStyle={{
              fontWeight: 'bold',
              color: '#777'
            }}>Our Team</NavLink>
            <NavLink activeClassName='active' to='/Portfolio' activeStyle={{
              fontWeight: 'bold',
              color: '#777'
            }}>Portfolio</NavLink>
            <NavLink activeClassName='active' to='/News' activeStyle={{
              fontWeight: 'bold',
              color: '#777'
            }}>News</NavLink>
            <NavLink activeClassName='active' to='/contact' activeStyle={{
              fontWeight: 'bold',
              color: '#777'
            }}>Contact Us</NavLink>
          </nav>
          <main className='main-content'>
            {/*<Switch>*/}
              {/*<Route exact path='/' component={Hero}/>*/}
              {/*<Route path='/Services' component={Services}/>*/}
              {/*<Route path='/Team' component={Team}/>*/}
              {/*<Route path='/Portfolio' component={Portfolio}/>*/}
              {/*<Route path='/News' component={News}/>*/}
              {/*<Route path='/Contact' component={Contact}/>*/}

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
            {/*</Switch>*/}
          </main>
        </section>

    )
        ;
  }
};