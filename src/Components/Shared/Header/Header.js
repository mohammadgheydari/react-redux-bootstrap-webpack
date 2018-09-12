import React, { Component } from "react";
import "./header.scss"
import Logo from "../../../logo.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5">
          <a classNameName="navbar-brand" href="/">
            <img src={Logo} width="180px" alt="flightio-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  ورود/ثبت نام
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  درباره ما
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  تماس با ما
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/protected">
                  صفحه محافظت شده
                </a>
              </li>
            </ul>
          </div>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light justify-content-center">
          <a className="navbar-brand mr-0 ml-0" href="/">
            <img src={Logo} width="180px" alt="flightio-logo" />
          </a>
          <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item active">
                <a className="nav-link ml-4" href="#">پرواز داخلی</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-4" href="#">پرواز خارجی</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-4" href="#">هتل</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">قطار</a>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
              <li className="nav-item"><span className="ml-2 mt-2 d-inline-block"> 021-41501</span></li>
              <li className="nav-item"><a className="btn btn-outline-primary ml-2" href="#">ورود</a> </li>
              <li className="nav-item"><a className="btn btn-outline-success" href="#">ثبت نام</a> </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
