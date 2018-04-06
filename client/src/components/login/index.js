/**
 * Created by Rubel on 04/02/18.
 * Styling by Shreyas on 06/04/18 :D :)
 */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { saveToken } from './../../actions/token';

import burger from '../../assets/burger.png';
import beer from '../../assets/beer.png';
import cake from '../../assets/cake.png';
import doughnut from '../../assets/doughnut.png';
import pizza from '../../assets/pizza.png';
import popcorn from '../../assets/popcorn.png';
import roll from '../../assets/roll.png';
import wine from '../../assets/wine.png';
import truck from '../../assets/garbage-truck.png';

import './login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: { value: '', error: ''},
            password: { value: '', error: ''}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        
        this.makeThemFall = this.makeThemFall.bind(this);
        // this.wineFall = this.wineFall.bind(this);
        this.itemFall = this.itemFall.bind(this);
        this.count=0;

    }

    handleInputChange(event){
        this.setState({[event.target.name]: { value: event.target.value, error: ''}})
    }

    itemFall(value){
        document.querySelector("."+value).classList.add("fall");
        document.querySelector(".truck").classList.add("catch-"+value);
        
        setTimeout(()=>{
            document.querySelector("."+value).classList.add("display-none");
            document.querySelector(".truck").classList.remove("catch-"+value);
        },2000)
    }

    makeThemFall() {

        if(this.count>0){
            return;
        }
        this.count=1;
        this.itemFall("burger");

        setTimeout(()=>{
            this.itemFall("doughnut");
        },7000)

        setTimeout(()=>{
            this.itemFall("popcorn");
        },14000)
        
        setTimeout(()=>{
            this.itemFall("cake");
        },21000)
        
        setTimeout(()=>{
            this.itemFall("pizza");
        },28000)

        setTimeout(()=>{

        })
    }

    loginUser() {
        setTimeout(()=>{
            document.querySelector('.login__wrap').classList.remove('shake_effect');
        },600);


        axios.post('/api/user/login', {
            email: this.state.email.value,
            password: this.state.password.value
        })
        .then((response) => {
            console.log(response.headers['x-auth']);
            this.props.saveToken(response.headers['x-auth']);
            this.props.history.push('/');
        })
        .catch((e) => {
            if(e.response.data === "email not registered"){
                this.props.history.push('/register');
            }
            this.makeThemFall();
            document.querySelector('.login__wrap').classList.add('shake_effect');
        });
    }

    render() {
        return (
            <div className="login login-container">
                <div className="login-logo">
                    <div className="logo-name">snack-app</div>
                    <div className="logo-tagline">we live to eat</div>
                </div>
                <img className="login-icon burger" src={burger} alt=""/>
                <img className="login-icon roll" src={roll} alt=""/>
                <img className="login-icon pizza" src={pizza} alt=""/>
                <img className="login-icon wine" src={wine} alt=""/>
                <img className="login-icon doughnut" src={doughnut} alt=""/>
                <img className="login-icon popcorn" src={popcorn} alt=""/>
                <img className="login-icon cake" src={cake} alt=""/>
                <img onClick={()=>{this.makeThemFall()}} className="beer rotate" src={beer} alt=""/>
                <img className="truck" src={truck} alt=""/>
                
                <div className="login__wrap">
                    <div className="email-wrap">
                        <div>Email:</div>
                        <input type="text" name="email" value={this.state.email.value} onChange={this.handleInputChange} />
                    </div>
                    <div className="password-wrap">
                        <div>Password:</div>
                        <input type="password" name="password" value={this.state.password.value} onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button onClick={this.loginUser}>Login</button>
                    </div>
                </div>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
};
}

export default connect(mapStateToProps, { saveToken })(Login);


