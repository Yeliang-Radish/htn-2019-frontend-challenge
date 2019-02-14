import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { QuestionSet, ApiResponse } from "../utils/question_interfaces";

interface DashProps {
  numQuestionSets: number;
  questionSets: ApiResponse;
  changeActive: any;
}

const DashInfo = (props: DashProps) => (
  <div>
    {props.numQuestionSets !== 0 ? (
      props.questionSets.map((qset: QuestionSet) => (
        <SingleSet key={qset.id}>
          <NavLink
            to={`/question_set/${qset.id}`}
            className="col"
            // Styled components don't work on this
            style={{ textDecoration: "none" }}
            onClick={() => props.changeActive("Form")}
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

export default DashInfo;
