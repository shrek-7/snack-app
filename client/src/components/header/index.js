import React, { Component } from 'react';
import './header.css';
import logo from '../../assets/nachos.gif';

export default class Header extends Component {
  render() {
    return (
        <header className="snack-header hide">
            <div className="snack-header--text">I live to eat.
            </div>
            <img className="eat-gif" src={logo} alt=""/>
        </header>
    );
  }
}


