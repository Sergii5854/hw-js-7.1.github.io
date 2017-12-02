import React, {Component } from 'react';

import MacHeader from './../../assets/img/macHeaderAssett.png'

export default class Hero extends Component {
  render() {
    return (
        <section className="hero">
            <div className="tableVerticalAlign">
              <div className="container">
                <div className="row ">
                  <div className="col-md-6 col-sm-12 centerMobile">
                    <h1 className="heroTitle">ONE PAGE</h1>
                    <h2 className="heroSubTitle">IS ALL THAT YOU NEED</h2>
                    <p className="heroContent">Suspendisse mi nisl, adipiscing sit amet tellus sed, auctor aliquet felis. Aenean neque elit, blandit quis tempor eu, feugiat rhoncus lectus. Quisque sit amet pretium risus.</p>
                    <a href="#" className="filledButton">OUR TEAM</a>
                    <a href="#" className="borderButton">CONTACT US</a>
                  </div>
                  <div className="col-md-6 col-sm-12 wd70">
                    <img src={MacHeader}/>
                  </div>
                </div>
              </div>
            </div>

        </section>
    );
  }
};