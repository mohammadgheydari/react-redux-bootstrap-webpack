import React from "react";
// import { connect } from "react-redux";
// import { setName } from "../../Actions/userActions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from "../Home/SearchContainer";
import About from "../About/index";
import Contact from "../Contact/index";
import FlightResult from "../FlightResult";
import NoMatch from "../Error/404";
import Login from "../Account/Login";
const checkAuth = () => {
  const token = localStorage.getItem("userInfoName");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routing = () => (
  <Router>
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            path="/Flight/:source/:destination/:id"
            component={FlightResult}
            exact
          />
          <Route path="/login" component={Login} exact />
          <AuthRoute path="/protected" component={Contact} exact />
          <Route component={NoMatch} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </Router>
);

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     math: state.math
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     setName: name => {
//       dispatch(setName(name));
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Routing);

export default Routing;
