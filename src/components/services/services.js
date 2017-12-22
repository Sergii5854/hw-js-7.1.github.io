import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './servises.css'

import designBulb from './../../assets/img/design-analysis.png'
import designMagnifier from './../../assets/img/free-consultation.png'
import designPencil from './../../assets/img/graphic-design.png'

export default class Services extends Component {
  render() {
    return (
        <ScrollableAnchor id={'Services'}>
          <section className="services">
            <div className='container'>
              <div className='row'>
                <h1 className='serviceTitle'>Our Services</h1>

              </div>
              <div className='rowInfo'>
                <div className='baseInfoItems'>
                  <img src={designBulb} alt='designBulb'/>
                  <h2 className='basicInfoTitle'>HTML 5 & CSS3</h2>
                  <p className='basicInfoDescription'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec
                    commodo quam sit amet mauris
                    pellentesque, in commodo lorem venenatis.
                  </p>
                </div>
                <div className='baseInfoItems'>
                  <img src={designMagnifier} alt='designMagnifier'/>
                  <h2 className='basicInfoTitle'>SEO Optimization</h2>
                  <p className='basicInfoDescription'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec
                    commodo quam sit amet mauris
                    pellentesque, in commodo lorem venenatis.
                  </p>
                </div>
                <div className='baseInfoItems'>
                  <img src={designPencil} alt='designPencil'/>
                  <h2 className='basicInfoTitle'>SEO Optimization</h2>
                  <p className='basicInfoDescription'>
                    Sed fermentum, ante vel sagittis adipiscing,
                    purus nisi ultrices dolor, a aliquam nunc lacus
                    in turpis. Nunc molestie nisi diam. Donec
                    commodo quam sit amet mauris
                    pellentesque, in commodo lorem venenatis.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
    );
  }
};