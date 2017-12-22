import React, {Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
        <ScrollableAnchor id={'Portfolio'}>
        <section className="portfolio">
            <div className='container'>
                <div className='row'>
                    <h1 className='portfolioTitle'>Our Portfolio</h1>
                </div>
                <div className='rowImg'>
                    <div className='blockImg'>
                        <div className='block portfolio1'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockImg'>
                        <div className='block portfolio2'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rowLittleImg'>
                    <div className='blockLittleImg'>
                        <div className='block firstBlock portfolio3'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div className='block portfolio3'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div className='block portfolio3'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockLittleImg'>
                        <div className='block portfolio3'>
                            <div className='animation'>
                                <div className='titleAnimation'>
                                    <h3 className='icon'>Love Conquers All</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </ScrollableAnchor>
    );
  }
};