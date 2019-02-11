import React, { Component } from "react";
import getQuestions from "../utils/question_getter";
import { ApiResponse } from "../utils/question_interfaces";
import { HashRouter, NavLink, Route } from "react-router-dom";
import questionForm from "./question_form";

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
      console.log(data);
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
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
          <div>
            <Route path="/question_set/:setId" component={questionForm} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Dashboard;
