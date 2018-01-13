import React, { Component } from 'react';
import axios from 'axios';
import ItemTile from './components/item-tile';
import Header from '../../../header';

import dessert from '../../../../assets/dessert.jpg';
import kebab from '../../../../assets/kebab.jpg';
import steak from '../../../../assets/steak.jpg';

import './main-page.css';


export default class MainPage extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {name:"Dominoes"},{name:"Pizza Hut"}
      ]
    }
    this.renderTile=this.renderTile.bind(this);
  }
  componentDidMount(){
    //make api call
    axios.get('/api/food').then((defs)=>{
      console.log("hello");
      this.setState({data:[...this.state.data,...defs.data]});
    });
  }
  renderTile(){
    return(
      this.state.data.map((item)=> {
        return(
          <ItemTile data={item} />
        );
      })
    );
  }
  render() {
    return (
        <div id="main" className="main__wrapper">
        <Header/>
        <div className="tile-wrapper">
          {this.renderTile()}
          {/* <ItemTile src={dessert} />
          <ItemTile src={kebab} />
          <ItemTile src={steak} /> */}
        </div>
        </div>
    );
  }
}