import React, { Component } from 'react';
import fish from '../../../../assets/fish.jpg';
import hamburger from '../../../../assets/hamburger.jpg';
import kebab from '../../../../assets/kebab.jpg';
import paella from '../../../../assets/paella.jpg';
import steak from '../../../../assets/steak.jpg';
import tacos from '../../../../assets/tacos.jpg';
import './landing-page.css';
export default class LandingPage extends Component {
  render() {
    return (
       <div className='landing__wrapper'>
            <img className="landing__background" src={tacos} alt=""/>
       </div>
    );
  }
}