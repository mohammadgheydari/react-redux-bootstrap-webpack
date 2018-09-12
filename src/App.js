import React, { Component } from 'react';
import './App.scss';
import Layout from "./Components/Shared/Layout";
import { Provider } from 'react-redux'
import store from "./store"


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Main changeUsername={() => this.props.setName("Anna")} /> */}
        {/* <User username={this.props.user.name} /> */}
        <Provider store={store}>
          <Layout />
        </Provider>

      </div>
    );
  }
}


export default App;