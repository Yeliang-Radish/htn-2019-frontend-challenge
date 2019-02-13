import React, { Component } from "react";
import Logo from "../static/htn-logo.jpg";
import styled from "styled-components";
import "./navbar.css";

const StyledNav = styled.header`
  @media only screen and (max-width: 480px) {
    .corner {
      visibility: hidden;
    }
  }
`;

const CornerText = styled.div`
  @media only and (max-device-width: 480px) {
    display: none;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="50" height="50" alt="htn logo" />
        </a>
        <div className="corner">Frontend Challenge</div>
      </header>
    );
  }
}

export default Navbar;
