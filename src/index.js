import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import './index.css';
import App from './App';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMOSE_ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

  render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



