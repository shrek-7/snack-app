import React, { Component } from 'react';
import ItemTile from './components/item-tile';
import Header from '../../../header';

import dessert from '../../../../assets/dessert.jpg';

import './main-page.css';


export default class MainPage extends Component {
  render() {
    return (
        <div id="main" className="main__wrapper">
        <Header/>
        <div>
          <ItemTile src={dessert} />
        </div>
        </div>
    );
  }
}