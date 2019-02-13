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
    });
  }

  dashInfo = () => (
    <div>
      {this.state.numQuestionSets !== 0 ? (
        this.state.questionSets.map((qset: QuestionSet) => (
          <SingleSet>
            <NavLink
              to={`/question_set/${qset.id}`}
              className="col"
              key={qset.id}
              // Styled components don't work on this
              style={{ textDecoration: "none" }}
            >
              <QuestionLabel>{qset.label}</QuestionLabel>
              <QuestionsLeft>
                {qset.questions.length} Questions Left
              </QuestionsLeft>
            </NavLink>
          </SingleSet>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  renderQuestionPage = (props: any) => {
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
        <div>
          <Route exact={true} path="/" component={this.dashInfo} />
          <Route path="/dashboard" component={this.dashInfo} />
          <Route path="/question_set/:setId" render={this.renderQuestionPage} />
        </div>
      </HashRouter>
    );
  }
}

const SingleSet = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato");

  background-color: rgb(230, 255, 255);
  margin: 5vh 10vw;
  padding: 0;
  border: 2px solid rgb(128, 191, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgb(0, 0, 102);
`;

const QuestionLabel = styled.div`
  padding: 0 5vw;
  text-align: center;
  font-size: 2em;
  font-family: "Lato", sans-serif;
  color: black;
`;

const QuestionsLeft = styled.div`
  text-align: left;
  padding: 7vh 5vw 0;
  text-align: center;
`;

export default Dashboard;
