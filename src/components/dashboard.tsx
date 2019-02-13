import React, { Component } from "react";
import getQuestions from "../utils/question_getter";
import { ApiResponse, QuestionSet } from "../utils/question_interfaces";
import { HashRouter, NavLink, Route } from "react-router-dom";
import QuestionForm from "./question_form";
import styled from "styled-components";

class Dashboard extends Component {
  state = {
    questionSets: [], // For each question set, we will have a % completed for them
    numQuestionSets: 0
  };

  componentDidMount() {
    getQuestions().then((data: ApiResponse) => {
      let questionSets: ApiResponse = data;
      this.setState({ questionSets });
      this.setState({ numQuestionSets: questionSets.length });
      // console.log(data);
    });
  }

  dashInfo = () => (
    <div>
      {this.state.numQuestionSets !== 0 ? (
        this.state.questionSets.map((qset: any) => (
          <div className="col" key={qset.id}>
            <NavLink to={`/question_set/${qset.id}`}>{qset.id}</NavLink>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  renderQuestionPage = (props: any) => {
    // this.state.questionSets.forEach((set: QuestionSet) => {
    //   if (set.id === props.match.params.setId) {
    //     console.log("boy");
    //     return <QuestionForm />;
    //   }
    // });
    for (let i = 0; i < this.state.numQuestionSets; i++) {
      let set: QuestionSet = this.state.questionSets[i];
      if (set.id === props.match.params.setId) {
        return <QuestionForm questionSet={set} />;
      }
    }

    // Return statement to catch if something went wrong
    return <h1>You done now</h1>;
  };

  render() {
    return (
      <HashRouter>
        <StyledDashboard>
          <Route exact={true} path="/" component={this.dashInfo} />
          <Route path="/dashboard" component={this.dashInfo} />
          <Route path="/question_set/:setId" render={this.renderQuestionPage} />
        </StyledDashboard>
      </HashRouter>
    );
  }
}

const StyledDashboard = styled.div`
  margin-top: auto;
`;

export default Dashboard;
