import React, { Component } from 'react';
import fish from '../../../../assets/fish.jpg';
import hamburger from '../../../../assets/hamburger.jpg';
import kebab from '../../../../assets/kebab.jpg';
import paella from '../../../../assets/paella.jpg';
import dessert from '../../../../assets/dessert.jpg';
import tacos from '../../../../assets/tacos.jpg';
import './landing-page.css';
export default class LandingPage extends Component {
  constructor(){
    super();
    this.state={
      url:hamburger,
      qoute: "If music be the food of love , play on."
    }
    this.count=0;
    this.urlList=[fish,hamburger,kebab,paella,dessert,tacos];
    this.qouteList=["If music be the food of love , play on.",
    "Your diet is a bank account, Good food choices are good investments.",
    "Ask not what you can do for your country. Ask what’s for lunch.",
    "Life is a combination of magic and pasta.",
    "Life is Uncertain, eat dessert first.",
    "You don't need a silver fork to eat good food."];
    this.changeBackground=this.changeBackground.bind(this);
  }
  
  componentDidMount(){
    setInterval(()=>{
      document.querySelector(".landing__background").classList.remove("active");
      setTimeout(()=>{
        this.changeBackground();
      }, 1500);
    },10000);
  }

  changeBackground(){
    document.querySelector(".landing__background").classList.add("active");
    this.setState({url:this.urlList[this.count++%5], qoute: this.qouteList[this.count%5]});
  }

  render() {
    return (
       <div className='landing__wrapper'>
            <img className="landing__background active" src={this.state.url} alt=""/>
            <div className="image-cover">
            <main className='landing__border'>
              <div className="landing__text">
                {this.state.qoute}
              </div>
              <div className="landing__scroll">
                You can proceed if you are motivated enough.
                <i class="material-icons">mood</i>
              </div>
            </main>
            </div>
            
       </div>
    );
  }
}