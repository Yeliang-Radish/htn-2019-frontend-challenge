import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { QuestionSet, ApiResponse } from "../utils/question_interfaces";

interface DashProps {
  numQuestionSets: number;
  questionSets: ApiResponse;
  changeActive: any;
  completed: string[];
}

const DashInfo = (props: DashProps) => (
  <div>
    {props.numQuestionSets !== 0 ? (
      props.questionSets.map((qset: QuestionSet) => (
        <SingleSet
          completed={props.completed.includes(qset.id)}
          key={qset.id}
          className="fadeIn"
        >
          <NavLink
            to={`/question_set/${qset.id}`}
            className="col"
            // Styled components don't work on this
            style={{ textDecoration: "none" }}
            onClick={() => props.changeActive("Form")}
          >
            <QuestionLabel>{qset.label}</QuestionLabel>
            <QuestionsLeft>{qset.questions.length} Questions</QuestionsLeft>
          </NavLink>
        </SingleSet>
      ))
    ) : (
      <p>Loading...</p>
    )}
    {props.completed.length === props.numQuestionSets ? (
      <ButtonWrapper>
        <SubmitButton className="btn btn-primary">Submit</SubmitButton>
      </ButtonWrapper>
    ) : (
      <ButtonWrapper>
        <SubmitButton disabled className="btn btn-secondary">
          Submit
        </SubmitButton>
      </ButtonWrapper>
    )}
  </div>
);
// rgb(230, 255, 255)
const SingleSet = styled.div`
  background: ${(props: any) =>
    props.completed
      ? "radial-gradient(rgb(59, 230, 80), rgb(211, 209, 68));"
      : "radial-gradient(rgb(248, 100, 100), rgb(212, 151, 215));"}
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

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const SubmitButton = styled.button`
  box-shadow: 0px 1px 4px rgb(0, 0, 102);
`;

export default DashInfo;
