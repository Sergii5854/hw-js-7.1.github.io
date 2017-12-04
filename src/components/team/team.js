import React, {Component } from 'react';
import { Link, Route, Prompt } from 'react-router-dom'
import './team.css'

import lowerLine from './../../assets/img/blackLine.png'
import founder from './../../assets/img/Sergij.jpg'
import twitter from './../../assets/img/twitterIcon.png'
import icon from './../../assets/img/pinterestIcon.png'
import facebook from './../../assets/img/facebookIcon.png'
import googlePlus from './../../assets/img/gPlusIcon.png'
import linked from './../../assets/img/linkedIcon.png'

export default class Team extends Component {
  render() {
    return (
        <section className="team">
            <div className='container'>
                <div className='row'>
                    <h1 className='teamTitle'>Our Wonderful Team</h1>
                    <img src={lowerLine}/>
                </div>
                <div className='rowTeam'>
                    <div className='founder'>
                        <img className='founderImg' src={founder}/>
                        <h4>Sergiit</h4>
                        <h5>CEO / Founder</h5>
                        <p>
                            Neque porro quisquam est qui<br/>
                            dolorem ipsum quia dolor sit<br/>
                            amet, consectetur, adipisci velit...
                        </p>
                        <div className='socialIcons'>
                            <a href='#'>
                                <img src={twitter}/>
                            </a>
                            <a href='#'>
                                <img src={icon}/>
                            </a>
                            <a href='#'>
                                <img src={facebook}/>
                            </a>
                            <a href='#'>
                                <img src={googlePlus}/>
                            </a>
                            <a href='#'>
                                <img src={linked}/>
                            </a>
                        </div>
                    </div>
                    <div className='founder'>
                        <img className='founderImg' src={founder}/>
                        <h4>Sergii</h4>
                        <h5>CEO / Founder</h5>
                        <p>
                            Neque porro quisquam est qui<br/>
                            dolorem ipsum quia dolor sit<br/>
                            amet, consectetur, adipisci velit...
                        </p>
                        <div className='socialIcons'>
                            <a href='#'>
                                <img src={twitter}/>
                            </a>
                            <a href='#'>
                                <img src={icon}/>
                            </a>
                            <a href='#'>
                                <img src={facebook}/>
                            </a>
                            <a href='#'>
                                <img src={googlePlus}/>
                            </a>
                            <a href='#'>
                                <img src={linked}/>
                            </a>
                        </div>
                    </div>
                    <div className='founder'>
                        <img className='founderImg' src={founder}/>
                        <h4>Sergii</h4>
                        <h5>CEO / Founder</h5>
                        <p>
                            Neque porro quisquam est qui<br/>
                            dolorem ipsum quia dolor sit<br/>
                            amet, consectetur, adipisci velit...
                        </p>
                        <div className='socialIcons'>
                            <a href='#'>
                                <img src={twitter}/>
                            </a>
                            <a href='#'>
                                <img src={icon}/>
                            </a>
                            <a href='#'>
                                <img src={facebook}/>
                            </a>
                            <a href='#'>
                                <img src={googlePlus}/>
                            </a>
                            <a href='#'>
                                <img src={linked}/>
                            </a>
                        </div>
                    </div>
                    <div className='founder'>
                        <img className='founderImg' src={founder}/>
                        <h4>Sergii</h4>
                        <h5>CEO / Founder</h5>
                        <p>
                            Neque porro quisquam est qui<br/>
                            dolorem ipsum quia dolor sit<br/>
                            amet, consectetur, adipisci velit...
                        </p>
                        <div className='socialIcons'>
                            <a href='#'>
                                <img src={twitter}/>
                            </a>
                            <a href='#'>
                                <img src={icon}/>
                            </a>
                            <a href='#'>
                                <img src={facebook}/>
                            </a>
                            <a href='#'>
                                <img src={googlePlus}/>
                            </a>
                            <a href='#'>
                                <img src={linked}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
};