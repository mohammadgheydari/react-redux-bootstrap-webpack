import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../../About/index";

import "./header.scss";
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
          <div className="container">
            <a className="navbar-brand mr-0 ml-0" href="/">
              <img src={Logo} width="180px" alt="flightio-logo" />
            </a>
            <button
              className="navbar-toggler ml-1"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar2"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="navbar-collapse collapse justify-content-between align-items-center w-100"
              id="collapsingNavbar2"
            >
              <Router>
                <div>
                  <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item">
                      <Link to="/about" className="nav-link ml-4">
                        درباره ما
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ml-4" href="/contact">
                        تماس با ما
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link ml-4" href="/domestic">
                        پرواز داخلی
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ml-4" href="/international">
                        پرواز خارجی
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ml-4" href="/hotel">
                        هتل
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/train">
                        قطار
                      </a>
                    </li>
                  </ul>
                </div>
              </Router>

              <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
                <li className="nav-item">
                  <span className="ml-2 mt-2 d-inline-block"> 021-41501</span>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-primary ml-2" href="/login">
                    ورود
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-success" href="/signup">
                    ثبت نام
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
