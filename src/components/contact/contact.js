import React, {Component } from 'react';
import { Link, Route, Prompt } from 'react-router-dom'
import './contact.css'

import lowerLine from '../team/blackLine.png'
import mapPin from './../../assets/img/mapPin.png'
import arrow from './../../assets/img/arrow.png'
import phone from './../../assets/img/phone.png'

export default class Contact extends Component {
  render() {
    return (
        <section className="contact" id={'contact'} >
            <div className='container'>
                <div className='row'>
                    <h1 className='contactTitle'>Contact Us</h1>
                    <img src={lowerLine}/>
                </div>
                <div className='rowContactInfo'>
                    <div className='blockForm'>
                        <form>
                            <input type='text' name='fname' placeholder='Full Name'/>
                            <br/>
                            <input type='text' name='lname' placeholder='Email Address'/>
                            <br/>
                            <textarea placeholder='Message' rows='8' id='coment'>
                            </textarea>
                        </form>
                    </div>
                    <div className='blockContactInfo'>
                        <h2>Information</h2>
                        <p>
                            Proin nec dignissim tellus,<br/>
                            ut hendrerit erat. Vivamus ut<br/>
                            augue ac est sagittis<br/>
                            ullamcorper a porttitor nibh.<br/>
                            Donec non tortor consequat,<br/>
                            sollicitudin odio id,<br/>
                            vehicula lorem. Suspendisse a<br/>
                            euismod sem. Mauris rutrum<br/>
                            arcu a lorem aliquet feugiat.<br/>
                            Praesent tincidunt lacus at<br/>
                            nisl pharetra, nec suscipit<br/>
                            risus lobortis. Nunc vitae<br/>
                            enim a quam ultrices<br/>
                            faucibus. Proin sit amet<br/>
                            condimentum libero, ac<br/>
                            dignissim enim. Praesent<br/>
                            aliquam lacinia dapibus.
                        </p>
                        <p>
                            <img src={mapPin}/>
                            StreetName 163, 254 23 City
                        </p>
                        <img className='arrow' src={arrow}/>
                        <p>
                            <img src={phone}/>
                            (+254) 001 454 333 66
                        </p>
                        <a href='#' className='sendMessageBtn'>SEND MESSAGE</a>
                        <a href='#' className='viewMapBtn'>VIEW MAP</a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
};