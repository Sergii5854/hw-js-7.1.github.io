import React, {Component } from 'react';
import { Link, Route, Prompt } from 'react-router-dom'
import './portfolio.css'


import redIcon from './../../assets/img/viewMore.png'
import redIconStar from './../../assets/img/fave.png'

export default class Portfolio extends Component {
  render() {
    return (
        <section className="portfolio">
            <div className='container'>
                <div className='row'>
                    <h1 className='portfolioTitle'>Our Portfolio</h1>
                </div>
                <div className='rowImg'>
                    <div className='blockImg'>
                        <div id='portfolio1' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Hire Luke Stevens</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockImg'>
                        <div id='portfolio2' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Love Conquers All</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rowLittleImg'>
                    <div className='blockLittleImg'>
                        <div id='portfolio3' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Love Conquers All</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div id='portfolio3' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Love Conquers All</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div id='portfolio3' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Love Conquers All</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div id='portfolio3' className='block'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3>Love Conquers All</h3>
                                    <div className='icon'>
                                        <img src={redIcon}/>
                                        <img src={redIconStar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
};