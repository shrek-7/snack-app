import React, { Component } from 'react';
import fish from '../../../../assets/fish.jpg';
import hamburger from '../../../../assets/hamburger.jpg';
import kebab from '../../../../assets/kebab.jpg';
import paella from '../../../../assets/paella.jpg';
import dessert from '../../../../assets/dessert.jpg';
import tacos from '../../../../assets/tacos.jpg';
import $ from 'jquery';
import './landing-page.css';
export default class LandingPage extends Component {
  constructor(){
    super();
    this.state={
      url:fish,
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
    this.scrollTo=this.scrollTo.bind(this);
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
    this.count=(++this.count)%5;
    this.setState({url:this.urlList[this.count], qoute: this.qouteList[this.count]});
  }

  scrollTo(){
    $('html, body').animate({
      scrollTop: $("#header").offset().top
  }, 1500);

  setTimeout(()=>{
    document.querySelector('.landing__wrapper').classList.add('display-none')}
  ,2000);

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
              <div className="landing__scroll" onClick={this.scrollTo}>
                You can proceed if you are motivated enough.
                <i className="material-icons">mood</i>
              </div>
            </main>
            </div>
            
       </div>
    );
  }
}