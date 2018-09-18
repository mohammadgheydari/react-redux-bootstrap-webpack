import React, { Component } from "react";
// import BackToTop from "../../Helper/BackToTop/index";
import MaterialIcon from "material-icons-react";
import Back2Top from "react-back2top";
import "./backToTop.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="text-center">
          1397 © تمامی حقوق این وبسایت برای آژانس دورپرواز محفوظ است.
        </p>
        <Back2Top>
          <MaterialIcon icon="expand_less" />
        </Back2Top>
      </React.Fragment>
    );
  }
}

export default Footer;
