import React, { Component } from "react";
import getQuestions from "../utils/question_getter";
import { ApiResponse, QuestionSet } from "../utils/question_interfaces";
import { HashRouter, NavLink, Route } from "react-router-dom";
import QuestionForm from "./question_form";
import styled from "styled-components";
import Navbar from "./navbar";
import DashInfo from "./dashboard_general";

class Dashboard extends Component {
  state = {
    questionSets: [], // For each question set, we will have a % completed for them
    numQuestionSets: 0,
    completedSet: [],
    activeComponent:
      window.location.hash === "#/dashboard" ? "Dashboard" : "Form"
  };

  componentDidMount() {
    getQuestions().then((data: ApiResponse) => {
      let questionSets: ApiResponse = data;
      this.setState({ questionSets });
      this.setState({ numQuestionSets: questionSets.length });
    });
  }

  changeActive = (component: string) => {
    this.setState({ activeComponent: component });
  };

  dashInfo = () => (
    <DashInfo
      numQuestionSets={this.state.numQuestionSets}
      questionSets={this.state.questionSets}
      changeActive={this.changeActive}
      completed={this.state.completedSet}
    />
  );

  handleSubmit = (setId: string) => {
    let arr: string[] = this.state.completedSet;
    arr.push(setId);
    this.setState({ completedSet: arr });
  };

  renderQuestionPage = (props: any) => {
    for (let i = 0; i < this.state.numQuestionSets; i++) {
      let set: QuestionSet = this.state.questionSets[i];
      if (set.id === props.match.params.setId) {
        return <QuestionForm submit={this.handleSubmit} questionSet={set} />;
      }
    }

    // Return statement when loading component
    return <h1>Loading...</h1>;
  };

  renderNav = () => (
    <Navbar
      active={this.state.activeComponent}
      changeActive={this.changeActive}
    />
  );

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" render={this.renderNav} />
          <Route exact={true} path="/" render={this.dashInfo} />
          <Route path="/dashboard" render={this.dashInfo} />
          <Route path="/question_set/:setId" render={this.renderQuestionPage} />
        </div>
      </HashRouter>
    );
  }
}

export default Dashboard;
