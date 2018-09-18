import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./backToTop.css";

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

class ButtonLoader extends Component {
  handleScrollTop() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <button id="back-to-top" onClick={this.handleScrollTop}>
        <MaterialIcon icon="expand_less" />
      </button>
    );
  }
}

export default ButtonLoader;
