import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './team.css'


import founder from './../../assets/img/Sergij.jpg'
import twitter from './../../assets/img/twitterIcon.png'
import icon from './../../assets/img/pinterestIcon.png'
import facebook from './../../assets/img/facebookIcon.png'
import googlePlus from './../../assets/img/gPlusIcon.png'
import linked from './../../assets/img/linkedIcon.png'

export default class Team extends Component {
  render() {
    return (
        <ScrollableAnchor id={'Team'}>
          <section className="team">
            <div className='container'>
              <div className='row'>
                <h1 className='teamTitle'>Our Wonderful Team</h1>

              </div>
              <div className='rowTeam'>
                <div className='founder'>
                  <img className='founderImg' src={founder}/>
                  <h4 className="founderName">Sergii</h4>
                  <h5 className="founderPosition">CEO / Founder</h5>
                  <p className="founderDescription">
                    Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                  <div className='socialIcons'>
                    <a href='#twitter'>
                      <img src={twitter}/>
                    </a>
                    <a href='#icon'>
                      <img src={icon}/>
                    </a>
                    <a href='#facebook'>
                      <img src={facebook}/>
                    </a>
                    <a href='#googlePlus'>
                      <img src={googlePlus}/>
                    </a>
                    <a href='#linked'>
                      <img src={linked}/>
                    </a>
                  </div>
                </div>
                <div className='founder'>
                  <img className='founderImg' src={founder}/>
                  <h4 className="founderName">Sergii</h4>
                  <h5 className="founderPosition">CEO / Founder</h5>
                  <p className="founderDescription">
                    Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                  <div className='socialIcons'>
                    <a href='#twitter'>
                      <img src={twitter}/>
                    </a>
                    <a href='#icon'>
                      <img src={icon}/>
                    </a>
                    <a href='#facebook'>
                      <img src={facebook}/>
                    </a>
                    <a href='#googlePlus'>
                      <img src={googlePlus}/>
                    </a>
                    <a href='#linked'>
                      <img src={linked}/>
                    </a>
                  </div>
                </div>
                <div className='founder'>
                  <img className='founderImg' src={founder}/>
                  <h4 className="founderName">Sergii</h4>
                  <h5 className="founderPosition">CEO / Founder</h5>
                  <p className="founderDescription">
                    Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                  <div className='socialIcons'>
                    <a href='#twitter'>
                      <img src={twitter}/>
                    </a>
                    <a href='#icon'>
                      <img src={icon}/>
                    </a>
                    <a href='#facebook'>
                      <img src={facebook}/>
                    </a>
                    <a href='#googlePlus'>
                      <img src={googlePlus}/>
                    </a>
                    <a href='#linked'>
                      <img src={linked}/>
                    </a>
                  </div>
                </div>
                <div className='founder'>
                  <img className='founderImg' src={founder}/>
                  <h4 className="founderName">Sergii</h4>
                  <h5 className="founderPosition">CEO / Founder</h5>
                  <p className="founderDescription">
                    Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </p>
                  <div className='socialIcons'>
                    <a href='#twitter'>
                      <img src={twitter}/>
                    </a>
                    <a href='#icon'>
                      <img src={icon}/>
                    </a>
                    <a href='#facebook'>
                      <img src={facebook}/>
                    </a>
                    <a href='#googlePlus'>
                      <img src={googlePlus}/>
                    </a>
                    <a href='#linked'>
                      <img src={linked}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
    );
  }
};