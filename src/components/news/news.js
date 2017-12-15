import React, {Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './news.css'

import WhiteLine from './../../assets/img/whiteLine.png'
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
                    <img src={WhiteLine}/>
                </div>
                <div className='rowNewsInfo'>
                    <div className='blockNewsInfo'>
                        <img src={imgNews}/>
                        <div>
                            <h3>Theme HotelDeluxe<br/>
                                Released</h3>
                            <p>
                                <img src={calendar}/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit<br/>
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,<br/>
                                tempus libero. Morbi eget justo gravida,<br/>
                                ornare ipsum interdum, imperdiet sapien.<br/>
                                Pellentesque vitae ipsum dui. Vivamus a<br/>
                                dolor urna. Cras posuere eros eu odio aliquet<br/>
                                tincidunt. Sed at consequat nulla. Nulla luctus<br/>
                                dapibus nulla. Lorem ut, tempus libero. Morbi<br/>
                                eget justo gravida, ornare ipsum interdum,<br/>
                                imperdiet sapien. Pellentesque vitae ipsum<br/>
                                dui. Vivamus a dolor urna. Cras posuere eros<br/>
                                eu odio aliquet tincidunt. Sed at consequat<br/>
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img src={author}/>
                            Dan Aase
                            <img src={comments}/>
                            21 Comments
                        </div>
                    </div>
                    <div className='blockNewsInfo'>
                        <img src={imgNews}/>
                        <div>
                            <h3>Theme HotelDeluxe<br/>
                                Released</h3>
                            <p>
                                <img src={calendar}/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit<br/>
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,<br/>
                                tempus libero. Morbi eget justo gravida,<br/>
                                ornare ipsum interdum, imperdiet sapien.<br/>
                                Pellentesque vitae ipsum dui. Vivamus a<br/>
                                dolor urna. Cras posuere eros eu odio aliquet<br/>
                                tincidunt. Sed at consequat nulla. Nulla luctus<br/>
                                dapibus nulla. Lorem ut, tempus libero. Morbi<br/>
                                eget justo gravida, ornare ipsum interdum,<br/>
                                imperdiet sapien. Pellentesque vitae ipsum<br/>
                                dui. Vivamus a dolor urna. Cras posuere eros<br/>
                                eu odio aliquet tincidunt. Sed at consequat<br/>
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img src={author}/>
                            Dan Aase
                            <img src={comments}/>
                            21 Comments
                        </div>
                    </div>
                    <div className='blockNewsInfo'>
                        <img src={imgNews}/>
                        <div>
                            <h3>Theme HotelDeluxe<br/>
                                Released</h3>
                            <p>
                                <img src={calendar}/>
                                15th September, 21:24
                            </p>
                            <p>
                                Nunc vitae euismod orci, sit amet hendrerit<br/>
                                est. Nulla id ipsum rhoncus, porttitor ipsum ut,<br/>
                                tempus libero. Morbi eget justo gravida,<br/>
                                ornare ipsum interdum, imperdiet sapien.<br/>
                                Pellentesque vitae ipsum dui. Vivamus a<br/>
                                dolor urna. Cras posuere eros eu odio aliquet<br/>
                                tincidunt. Sed at consequat nulla. Nulla luctus<br/>
                                dapibus nulla. Lorem ut, tempus libero. Morbi<br/>
                                eget justo gravida, ornare ipsum interdum,<br/>
                                imperdiet sapien. Pellentesque vitae ipsum<br/>
                                dui. Vivamus a dolor urna. Cras posuere eros<br/>
                                eu odio aliquet tincidunt. Sed at consequat<br/>
                                nulla. Nulla luctus dapibus nulla...
                            </p>
                            <img src={author}/>
                            Dan Aase
                            <img src={comments}/>
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