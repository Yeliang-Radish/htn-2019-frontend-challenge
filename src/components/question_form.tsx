import React, { Component } from "react";
import { QuestionSet } from "../utils/question_interfaces";

export default class questionForm extends Component {
  constructor(props: any) {
    super(props);
    console.log(this.props);
  }

  render() {
    return <h1>This is the form</h1>;
  }
}
