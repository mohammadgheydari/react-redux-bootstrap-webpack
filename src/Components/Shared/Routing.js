import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { setName } from "../../Actions/userActions"
import Home from "../Home/SearchContainer"

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);


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
export default connect(mapStateToProps, mapDispatchToProps)(Routing);