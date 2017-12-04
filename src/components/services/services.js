import React, {Component } from 'react';
import { Link, Route, Prompt } from 'react-router-dom'
import './servises.css'

import lowerLine from './../../assets/img/blackLine.png'
import designBulb from './../../assets/img/design-analysis.png'
import designMagnifier from './../../assets/img/free-consultation.png'
import designPencil from './../../assets/img/graphic-design.png'

export default class Services extends Component {
  render() {
    return (
        <section className="services">
            <div className='container'>
                <div className='row'>
                    <h1 className='serviceTitle'>Our Services</h1>
                    <img src={lowerLine}/>
                </div>
                <div className='rowInfo'>
                    <div className='basicInfo'>
                        <img src={designBulb}/>
                        <h2 className='basicInfoTitle'>HTML 5 & CSS3</h2>
                        <p>
                            Sed fermentum, ante vel sagittis adipiscing,<br/>
                            purus nisi ultrices dolor, a aliquam nunc lacus<br/>
                            in turpis. Nunc molestie nisi diam. Donec<br/>
                            commodo quam sit amet mauris<br/>
                            pellentesque, in commodo lorem venenatis.<br/>
                        </p>
                    </div>
                    <div className='optimizationInfo'>
                        <img src={designMagnifier}/>
                        <h2 className='optimizationTitle'>SEO Optimization</h2>
                        <p>
                            Sed fermentum, ante vel sagittis adipiscing,<br/>
                            purus nisi ultrices dolor, a aliquam nunc lacus<br/>
                            in turpis. Nunc molestie nisi diam. Donec<br/>
                            commodo quam sit amet mauris<br/>
                            pellentesque, in commodo lorem venenatis.<br/>
                        </p>
                    </div>
                    <div className='designInfo'>
                        <img src={designPencil}/>
                        <h2 className='GraphicDesignTitle'>SEO Optimization</h2>
                        <p>
                            Sed fermentum, ante vel sagittis adipiscing,<br/>
                            purus nisi ultrices dolor, a aliquam nunc lacus<br/>
                            in turpis. Nunc molestie nisi diam. Donec<br/>
                            commodo quam sit amet mauris<br/>
                            pellentesque, in commodo lorem venenatis.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
};