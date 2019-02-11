import React, { Component } from "react";
import "./App.css";
import Creator from "./utils/file_generator";
import { any } from "prop-types";

// interface State {
//   form: any;
// }
class App extends Component {
  state = {
    form: []
  };
  constructor(props: any) {
    super(props);
  }

  getForm = () => {
    let form = Creator();
    this.setState({ form });
  };

  componentDidMount() {
    let form = Creator();
    this.getForm();
    console.log(this.state, "The state");
  }
  render() {
    return <div>{this.state.form.map((C: any) => C)}</div>;
  }
}

export default App;
