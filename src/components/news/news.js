import React, {Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './news.css'

import imgNews from './../../assets/img/IMG-here5.png'
import calendar from './../../assets/img/calendar.png'
import author from './../../assets/img/author.png'
import comments from './../../assets/img/comments.png'

export default class News extends Component {
  render() {
    return (
        <ScrollableAnchor id={'News'}>
        <section className="news">
            <div className='container'>
                <div className='row'>
                    <h1 className='newsTitle'>The Latest News</h1>
                </div>
                <div className='rowNewsInfo'>
                    <div className='blockNewsInfo'>
                        <img src={imgNews} alt='line'/>
                        <div className='textInfo'>
                            <h3>Theme HotelDeluxe Released</h3>
                            <p>
                                <img className='calendar' src={calendar} alt='calendar'/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,
                                tempus libero. Morbi eget justo gravida,
                                ornare ipsum interdum, imperdiet sapien.
                                Pellentesque vitae ipsum dui. Vivamus a
                                dolor urna. Cras posuere eros eu odio aliquet
                                tincidunt. Sed at consequat nulla. Nulla luctus
                                dapibus nulla. Lorem ut, tempus libero. Morbi
                                eget justo gravida, ornare ipsum interdum,
                                imperdiet sapien. Pellentesque vitae ipsum
                                dui. Vivamus a dolor urna. Cras posuere eros
                                eu odio aliquet tincidunt. Sed at consequat
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img className='autor' src={author} alt='author'/>
                            Dan Aase
                            <img className='comments' src={comments} alt='comments'/>
                            21 Comments
                        </div>
                    </div>
                    <div className='blockNewsInfo'>
                        <img src={imgNews}/>
                        <div className='textInfo'>
                            <h3>Theme HotelDeluxe Released</h3>
                            <p>
                                <img className='calendar' src={calendar} alt='calendar'/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,
                                tempus libero. Morbi eget justo gravida,
                                ornare ipsum interdum, imperdiet sapien.
                                Pellentesque vitae ipsum dui. Vivamus a
                                dolor urna. Cras posuere eros eu odio aliquet
                                tincidunt. Sed at consequat nulla. Nulla luctus
                                dapibus nulla. Lorem ut, tempus libero. Morbi
                                eget justo gravida, ornare ipsum interdum,
                                imperdiet sapien. Pellentesque vitae ipsum
                                dui. Vivamus a dolor urna. Cras posuere eros
                                eu odio aliquet tincidunt. Sed at consequat
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img className='autor' src={author} alt='author'/>
                            Dan Aase
                            <img className='comments' src={comments} alt='comments'/>
                            21 Comments
                        </div>
                    </div>
                    <div className='blockNewsInfo'>
                        <img src={imgNews}/>
                        <div className='textInfo'>
                            <h3>Theme HotelDeluxe Released</h3>
                            <p>
                                <img className='calendar' src={calendar} alt='calendar'/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,
                                tempus libero. Morbi eget justo gravida,
                                ornare ipsum interdum, imperdiet sapien.
                                Pellentesque vitae ipsum dui. Vivamus a
                                dolor urna. Cras posuere eros eu odio aliquet
                                tincidunt. Sed at consequat nulla. Nulla luctus
                                dapibus nulla. Lorem ut, tempus libero. Morbi
                                eget justo gravida, ornare ipsum interdum,
                                imperdiet sapien. Pellentesque vitae ipsum
                                dui. Vivamus a dolor urna. Cras posuere eros
                                eu odio aliquet tincidunt. Sed at consequat
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img className='autor' src={author} alt='author'/>
                            Dan Aase
                            <img className='comments' src={comments} alt='comments'/>
                            21 Comments
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </ScrollableAnchor>
    );
  }
};