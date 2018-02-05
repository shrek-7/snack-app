import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

import ItemTile from './components/item-tile';
import DrinksTile from './components/drinks-tile';
import Header from '../../../header';

// import dessert from '../../../../assets/dessert.jpg';
// import kebab from '../../../../assets/kebab.jpg';
// import steak from '../../../../assets/steak.jpg';

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
      drinks: [{src:bud,name:"budweiser magnum"},{src:biraW,name:"bira white"},{src:carls,name:"Carlsberg elephant"}]
    }
    this.renderTile=this.renderTile.bind(this);
    this.renderDrinks=this.renderDrinks.bind(this);
    this.scrollToDrinks=this.scrollToDrinks.bind(this);
    this.scrollToSnacks=this.scrollToSnacks.bind(this);
  }
  componentDidMount(){
    //make api call
    axios.get('/api/food').then((defs)=>{
      console.log("hello");
      this.setState({data:[...this.state.data,...defs.data]});
    }).catch((error) => {
      console.log(error);
    });

    axios.get('/api/drinks').then((defs)=>{
      this.setState({drinks:[...this.state.drinks,defs.data]});
    }).catch((error) => {
      console.log(error);
    })
  }
  renderTile(){
    return(
      this.state.data.map((item,index)=> {
        return(
          <ItemTile key={index} data={item} />
        );
      })
    );
  }
  renderDrinks(){
    return(
      this.state.drinks.map((item,index)=> {
        return(
          <DrinksTile key={index} data={item}/>
        );
      })
    );
  }

  scrollToDrinks(){
    $('.nav__snacks').removeClass('nav__active');
    $('.nav__drinks').addClass('nav__active');
    $('html, body').animate({
      scrollTop: $('#drinks').offset().top
  }, 1000);
  }
  scrollToSnacks(){
    $('.nav__drinks').removeClass('nav__active');
    $('.nav__snacks').addClass('nav__active');
    $('html, body').animate({
      scrollTop: $("#snacks").offset().top-150
  }, 1000);
  }

  render() {
    return (
        <div id="main" className="main__wrapper">
        <Header/>
        <div className='nav navigation__wrap'>
          <div onClick={()=>this.scrollToSnacks()} className='nav__snacks nav__active'>Snacks</div>
          <div onClick={()=>this.scrollToDrinks()} className='nav__drinks'>Drinks</div>
        </div>
        <div className="snacks-wrapper">
          <div className="tile-wrapper snacks-wrapper__food" id="snacks">
            {this.renderTile()}
            {/* <ItemTile src={dessert} />
            <ItemTile src={kebab} />
            <ItemTile src={steak} /> */}
          </div>
          {/* <div className="separator"></div> */}
          <div className="snacks-wrapper__drinks" id="drinks">
            {this.renderDrinks()}
          </div>
        </div>
        </div>
    );
  }
}