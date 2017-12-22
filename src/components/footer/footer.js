import React, {Component} from 'react';
import './footer.css'
import logo from './../../assets/img/logo.png'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <div className='container block'>
            <div className='footerBlock'>
              <div className="footer__section">
                <div className='footerLogo'>
                  <img src={logo} className='App-logo' alt='logo'/>
                  <h3><span className='logo'>Pro</span>Jex</h3>
                </div>
                <h2>One Page Business Theme</h2>
              </div>
              <div className='textBlock'>
                <p>&copy; Copyright 2017</p>
              </div>
            </div>
            <div className='text'>
              <p>Designed BY C3Developement</p>
            </div>
          </div>
        </footer>
    );
  }
};