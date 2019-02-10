import React, { Component } from "react";
import getQuestions from "../utils/question_getter";

class Dashboard extends Component {
  state = {
    questionSets: [] // For each question set, we will have a % completed for them
  };

  componentDidMount() {
    getQuestions();
  }

  render() {
    return <h1>Hello Friends</h1>;
  }
}

export default Dashboard;
