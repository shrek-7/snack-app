import React, { Component } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import promise from "redux-promise";
// import reducers from "./reducers";
import configureStore from './store/configureStore';

import Dashboard from './components/dashboard';
import Register from './components/register';
import Login from './components/login';

import './App.css';

let { store, persistor } = configureStore();
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStoreWithMiddleware(reducers);

// const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login} />
              <Redirect exact from="/" to="/dashboard" />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
