import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { deleteToken } from './../../actions/token';


import './header.css';
import logo from '../../assets/nachos.gif';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }

    this.logAction = this.logAction.bind(this);
  }

  componentDidMount(){
    //api to get info about the current user
    if(this.props.token){
      let token = this.props.token;
      axios.get('/api/user/me', { headers: { "x-auth": token } }).then((defs)=>{
        this.setState({user: defs.data})
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
        this.setState({user: {}});
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
              {Object.keys(this.state.user).length === 0 ? "Hello Rafter" : `Hi ${this.state.user.firstName}`}
            </div>
            <div className="snack-header--text">
              <span>I live to eat, you should try it too.</span>
              <img className="eat-gif" src={logo} alt=""/>
            </div>
            <div onClick={this.logAction} className="snack-header__log-text">
              {this.props.token ? "Logout" : "Login"}
            </div>
            {this.state.user.isAdmin &&
              (
                <Link to={{pathname: '/addItem'}}>
                  <div className="snack-header__add-item">
                    Add item
                  </div>
                </Link>
              )
            }
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


