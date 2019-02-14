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
    // Here we can use a set instead, but I am lazy
    // @ts-ignore
    if (!this.state.completedSet.includes(setId)) {
      arr.push(setId);
    }
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

// The json data for reference
// [
//   {
//     "id": "generalInfo",
//     "label": "General Info",
//     "questions": [
//       {
//         "id": "name",
//         "label": "What is your name?",
//         "type": "text",
//         "placeholder": "John Doe"
//       }, {
//         "id": "email",
//         "label": "What is your email?",
//         "type": "text",
//         "placeholder": "hello@hackthenorth.com"
//       }, {
//         "id": "shirtSize",
//         "label": "What is your shirt size?",
//         "type": "select",
//         "options": [
//           {
//             "label": "Small",
//             "value": "small"
//           }, {
//             "label": "Medium",
//             "value": "medium"
//           }, {
//             "label": "Large",
//             "value": "large"
//           }
//         ]
//       }, {
//         "id": "travellingFrom",
//         "label": "Where are you travelling from?",
//         "type": "text",
//         "placeholder": "Montreal, Quebec"
//       }, {
//         "id": "needsReimbursement",
//         "label": "Will you need a travel reimbursement?",
//         "type": "select",
//         "options": [
//           {
//             "label": "Yes",
//             "value": "y"
//           }, {
//             "label": "No",
//             "value": "n"
//           }
//         ]
//       }, {
//         "id": "goal",
//         "label": "What is your goal to accomplish Hack the North?",
//         "type": "longText",
//         "placeholder": "Build something cool!"
//       }
//     ]
//   }, {
//     "id": "technicalSkills",
//     "label": "Technical Skills",
//     "questions": [
//       {
//         "id": "github",
//         "label": "What is your github profile?",
//         "type": "text",
//         "placeholder": "https://github.com/"
//       }, {
//         "id": "interest",
//         "label": "What is your main interest?",
//         "type": "select",
//         "options": [
//           {
//             "label": "Frontend",
//             "value": "fe"
//           }, {
//             "label": "Backend",
//             "value": "be"
//           }, {
//             "label": "Machine Learning",
//             "value": "ml"
//           }, {
//             "label": "Product Design",
//             "value": "pd"
//           }
//         ]
//       }, {
//         "id": "project",
//         "label": "What is a cool project that you built? How did you build it? Why did you build it?",
//         "type": "longText",
//         "placeholder": "Uber for dogs"
//       }
//     ]
//   }
// ]
