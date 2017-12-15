import React, {Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './hero.css'
import MacHeader from './../../assets/img/macHeaderAssett.png'

export default class Hero extends Component {
  render() {
    return (
        <ScrollableAnchor id={'Home'}>
        <section className='hero'>
            <div className="blockHero">
              <div className="container">
                <div className="row ">
                  <div className="rowInfo">
                    <h1 className="heroTitle">ONE PAGE</h1>
                    <h2 className="heroSubTitle">IS ALL THAT YOU NEED</h2>
                    <p className="heroContent">Suspendisse mi nisl, adipiscing sit amet tellus sed, auctor aliquet felis. Aenean neque elit, blandit quis tempor eu,<br/>
                      feugiat rhoncus lectus. Quisque sit amet pretium risus.</p>
                    <a href="#Team" className="filledButton">OUR TEAM</a>
                    <a href="#Contact" className="borderButton">CONTACT US</a>
                  </div>
                  <div className='rowImg'>
                    <img src={MacHeader}/>
                  </div>
                </div>
              </div>
            </div>
        </section>
        </ScrollableAnchor>
    );
  }
};