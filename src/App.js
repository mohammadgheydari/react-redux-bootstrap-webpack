import React, { Component } from "react";
import "./App.scss";
import Layout from "./Components/Shared/Layout";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
