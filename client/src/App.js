import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import promise from "redux-promise";
import reducers from "./reducers";

import Dashboard from './components/dashboard';
import Register from './components/register';

import './App.css';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStoreWithMiddleware(reducers);

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route path='/register' component={Register}/>
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
