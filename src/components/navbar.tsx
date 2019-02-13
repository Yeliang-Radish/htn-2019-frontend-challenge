import React, { Component } from "react";
import Logo from "../static/htn-logo.jpg";
import styled from "styled-components";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="50" height="50" alt="htn logo" />
        </a>
        <div className="dash-text nav-item">Dashboard</div>
        <div className="corner nav-item">Frontend Challenge</div>
      </header>
    );
  }
}

export default Navbar;
