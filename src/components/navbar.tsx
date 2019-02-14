import React, { Component } from "react";
import Logo from "../static/htn-logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";

type props = {
  active: string;
  changeActive: any;
};

class Navbar extends Component<props> {
  render() {
    return (
      <header className="navbar">
        <NavLink
          onClick={() => this.props.changeActive("Dashboard")}
          className="navbar-brand"
          to="/dashboard"
        >
          <img src={Logo} width="50" height="50" alt="htn logo" />
        </NavLink>
        <h2 className="dash-text nav-item">{this.props.active}</h2>
        <div className="corner nav-item">Frontend Challenge</div>
      </header>
    );
  }
}

export default Navbar;
