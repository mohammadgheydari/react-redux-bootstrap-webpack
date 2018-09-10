import React, { Component } from 'react';
import './App.scss';
import Counter from "./Components/Counter"

import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"

const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
}

const userReducer = (state = {
  name: "max",
  age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
}

const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action!", action)
  next(action);
};
const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(myLogger, logger));

store.subscribe(() => {
  // console.log("Store Updated!", store.getState());
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={4} />
      </div>
    );
  }
}

export default App;
