/**
 * Created by Rubel on 04/02/18.
 */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { saveToken } from './../../actions/token';

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
    }

    handleInputChange(event){
        this.setState({[event.target.name]: { value: event.target.value, error: ''}})
    }

    loginUser() {
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
        });
    }

    render() {
        return (
            <div>
                <span>Email:</span>
                <input type="text" name="email" value={this.state.email.value} onChange={this.handleInputChange} />
                <span>Password:</span>
                <input type="password" name="password" value={this.state.password.value} onChange={this.handleInputChange} />
                <button onClick={this.loginUser}>Login</button>
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


