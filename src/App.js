import React, { Component } from 'react';
import './App.scss';
import User from "./Components/User";
import Main from "./Components/Main";
import { connect } from "react-redux";
import { setName } from "./Actions/userActions"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Main changeUsername={() => this.props.setName("Anna")} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);