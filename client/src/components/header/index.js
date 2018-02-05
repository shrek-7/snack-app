import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { deleteToken } from './../../actions/token';


import './header.css';
import logo from '../../assets/nachos.gif';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
    }

    this.logAction = this.logAction.bind(this);
  }

  componentDidMount(){
    //api to get info about the current user
    if(this.props.token){
      let token = this.props.token;
      axios.get('/api/user/me', { headers: { "x-auth": token } }).then((defs)=>{
        this.setState({name: defs.data.firstName})
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  //function to perform log functionalities
  logAction(){
    if(this.props.token){
      let token = this.props.token;
      axios.delete('/api/user/logout', { headers: { "x-auth": token } }).then((defs)=>{
        this.props.deleteToken();
        this.setState({name: ''});
      }).catch((error) => {
        console.log(error);
      });
    }
    else{
      this.props.history.push('/login');
    }
  }

  render() {
    return (
        <header id="header" className="snack-header">
            <div className="snack-header__user-text">
              {this.state.name === '' ? "Hello Rafter" : `Hi ${this.state.name}`}
            </div>
            <div className="snack-header--text">
              <span>I live to eat, you should try it too.</span>
              <img className="eat-gif" src={logo} alt=""/>
            </div>
            <div onClick={this.logAction} className="snack-header__log-text">
              {this.props.token ? "Logout" : "Login"}
            </div>
        </header>
    );
  }
}

function mapStateToProps(state) {
  return {
      token: state.token
};
}

export default withRouter(connect(mapStateToProps, { deleteToken })(Header));


