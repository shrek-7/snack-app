import React, { Component } from 'react';
import './header.css';
import logo from '../../assets/nachos.gif';

export default class Header extends Component {
  render() {
    return (
        <header id="header" className="snack-header">
            <div className="snack-header--text">I live to eat, you should try it too.
            </div>
            {/* <img className="eat-gif" src={logo} alt=""/> */}
        </header>
    );
  }
}


