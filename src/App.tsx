import React, { Component, Fragment } from "react";

import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
