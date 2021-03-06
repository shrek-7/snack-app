/**
 * Created by Rubel on 28/01/18.
 */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { saveToken } from './../../actions/token';

import './register.css';

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName: { value: '', error: ''},
            lastName: { value: '', error: ''},
            email: { value: '', error: ''},
            password: { value: '', error: ''}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    handleInputChange(event){
        this.setState({[event.target.name]: { value: event.target.value, error: ''}})
    }

    registerUser() {
        axios.post('/api/user', {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            password: this.state.password.value
        })
        .then((response) => {
            console.log(response.headers['x-auth']);
            this.props.saveToken(response.headers['x-auth']);
            this.props.history.push('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <span>First Name:</span>
                <input type="text" name="firstName" value={this.state.firstName.value} onChange={this.handleInputChange} />
                <span>Last Name:</span>
                <input type='text' name='lastName' value={this.state.lastName.value} onChange={this.handleInputChange} />
                <span>Email:</span>
                <input type="text" name="email" value={this.state.email.value} onChange={this.handleInputChange} />
                <span>Password:</span>
                <input type="password" name="password" value={this.state.password.value} onChange={this.handleInputChange} />
                <button onClick={this.registerUser}>Register</button>
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
  };
}

export default connect(mapStateToProps, { saveToken })(Register);


