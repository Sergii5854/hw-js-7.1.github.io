import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './contact.css'

import mapPin from './../../assets/img/mapPin.png'
import arrow from './../../assets/img/arrow.png'
import phone from './../../assets/img/phone.png'

export default class Contact extends Component {
  render() {
    return (
        <ScrollableAnchor id={'Contact'}>
          <section className="contact">
            <div className='container'>
              <div className='row'>
                <h2 className='contactTitle'>Contact Us</h2>
              </div>
              <div className='rowContactInfo'>
                <div className='blockForm'>
                  <form>
                    <input type='text' name='fname' placeholder='Full Name'/>

                    <input type='text' name='lname' placeholder='Email Address'/>

                    <textarea placeholder='Message' rows='8'>
                            </textarea>
                  </form>
                </div>
                <div className='blockContactInfo'>
                  <h2>Information</h2>
                  <p>
                    Proin nec dignissim tellus,
                    ut hendrerit erat. Vivamus ut
                    augue ac est sagittis
                    ullamcorper a porttitor nibh.
                    Donec non tortor consequat,
                    sollicitudin odio id,
                    vehicula lorem. Suspendisse a
                    euismod sem. Mauris rutrum
                    arcu a lorem aliquet feugiat.
                    Praesent tincidunt lacus at
                    nisl pharetra, nec suscipit
                    risus lobortis. Nunc vitae
                    enim a quam ultrices
                    faucibus. Proin sit amet
                    condimentum libero, ac
                    dignissim enim. Praesent
                    aliquam lacinia dapibus.
                  </p>
                  <div className='arrow'>
                    <p className='contactBlock'>
                      <img src={mapPin} alt='mapPin'/>
                      StreetName 163, 254 23 City
                    </p>
                    <img className='arrowImg' src={arrow} alt='arrow'/>
                  </div>
                  <p className='contactBlock'>
                    <img src={phone} alt='phone'/>
                    (+254) 001 454 333 66
                  </p>
                  <div className='btn'>
                    <a href='#sendMessageBtn' className='sendMessageBtn'>SEND MESSAGE</a>
                    <a href='#viewMapBtn' className='viewMapBtn'>VIEW MAP</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
    );
  }
};