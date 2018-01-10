import React, { Component } from 'react';
import LandingPage from './components/landing-page';
import MainPage from './components/main-page'
import './dashboard.css';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <MainPage/>
      </div>
    );
  }
}