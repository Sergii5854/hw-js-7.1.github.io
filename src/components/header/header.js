import React, {Component} from 'react';
import './header.css'

import logo from './logo.png'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.anchorClick = this.anchorClick.bind(this);
  }

  anchorClick(event) {
    document.location.replace(event.target.getAttribute('href'))
  }

  render() {
    return (
        <section className="header">
          <header className='App-header'>
            <a href="#Home"><img src={logo} className='App-logo' alt='logo'/></a>
            <h1><span className='logo'>Pro</span>Jex</h1>
            <h2>One Page Business Theme</h2>
          </header>
          <nav className='nav'>
            <a  onClick={this.anchorClick} href='#Home'  >Home</a>
            <a onClick={this.anchorClick}  href='#Services'>Services</a>
            <a onClick={this.anchorClick}  href='#Team'>Our Team</a>
            <a onClick={this.anchorClick} href='#Portfolio'>Portfolio</a>
            <a onClick={this.anchorClick}  href='#News'>News</a>
            <a onClick={this.anchorClick} href='#Contact'>Contact Us</a>
          </nav>
        </section>

    );
  }
};