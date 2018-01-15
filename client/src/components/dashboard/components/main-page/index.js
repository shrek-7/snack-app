import React, { Component } from 'react';
import axios from 'axios';
import ItemTile from './components/item-tile';
import DrinksTile from './components/drinks-tile';
import Header from '../../../header';

import dessert from '../../../../assets/dessert.jpg';
import kebab from '../../../../assets/kebab.jpg';
import steak from '../../../../assets/steak.jpg';

import bud from '../../../../assets/bud.jpeg';
import biraW from '../../../../assets/bira-white.jpg';
import carls from '../../../../assets/carlsberg.jpeg';

import './main-page.css';


export default class MainPage extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {name:"Dominoes"},{name:"Pizza Hut"},{name:"MacDonalds"}
      ],
      drinks: [{src:bud,title:"budweiser magnum(strong)"},{src:biraW,title:"bira white(light)"},{src:carls,title:"Carlsberg elephant(strong)"}]
    }
    this.renderTile=this.renderTile.bind(this);
    this.renderDrinks=this.renderDrinks.bind(this);
  }
  componentDidMount(){
    //make api call
    axios.get('/api/food').then((defs)=>{
      this.setState({data:[...this.state.data,defs.data]});
    });

    axios.get('/api/drinks').then((defs)=>{
      this.setState({drinks:[...this.state.drinks,defs.data]});
    });
  }
  renderTile(){
    return(
      this.state.data.map((item)=> {
        return(
          <ItemTile src={steak} name={item.name} />
        );
      })
    );
  }
  renderDrinks(){
    return(
      this.state.drinks.map((item)=> {
        return(
          <DrinksTile src={item.src} title={item.title}/>
        );
      })
    );
  }
  render() {
    return (
        <div id="main" className="main__wrapper">
        <Header/>
        <div className="snacks-wrapper">
          <div className="tile-wrapper snacks-wrapper__food">
            {this.renderTile()}
            {/* <ItemTile src={dessert} />
            <ItemTile src={kebab} />
            <ItemTile src={steak} /> */}
          </div>
          <div className="separator"></div>
          <div className="snacks-wrapper__drinks">
            {this.renderDrinks()}
          </div>
        </div>
        </div>
    );
  }
}