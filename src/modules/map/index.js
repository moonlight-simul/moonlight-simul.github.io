import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/app';
import {applyMiddleware, createStore, compose} from "redux";
import ReduxPromise from "redux-promise";
import persistState from 'redux-localstorage';

class Root extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(
      reducers,
      compose(
        applyMiddleware(ReduxPromise),
        persistState([
        ], {
          key: 'map'
        })
      ));
  }

  componentDidMount() {
    alert('本工具尚在制作中…');
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default Root;