import React, { Component, Fragment } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import questionParser from "../utils/form_utils";
import styled from "styled-components";
import "./animation.css";
import { NavLink } from "react-router-dom";

type FormProps = {
  questionSet: QuestionSet;
  submit: any;
  updateResponse: any;
  responses: string[];
  changeActive: any;
};
interface State {
  questions: Question[];
  numQuestions: number;
  formId: string;
  formLabel: string;
  form: any[];
  currentQuestionNum: number;
  responses: any[];
  questionIds: string[];
}

export default class QuestionForm extends Component<FormProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: this.props.questionSet.questions,
      numQuestions: this.props.questionSet.questions.length,
      questionIds: this.props.questionSet.questions.map(q => q.id),
      formId: this.props.questionSet.id,
      formLabel: this.props.questionSet.label,
      form: [],
      currentQuestionNum: 0,
      responses: this.props.responses
    };
  }

  getForm = () => {
    let form = questionParser(
      this.state.questions,
      this.updateResponseText,
      this.state.responses
    );
    this.setState({ form });
  };

  getProgress = () => {
    return (this.state.currentQuestionNum / this.state.responses.length) * 100;
  };

  componentDidMount() {
    this.getForm();
  }

  updateResponseText = (text: string, id: string) => {
    // Sloppiest code of my life, but I gotta bring up the state
    this.props.updateResponse(text, id, this.state.formId);
  };

  questionMaxMin = () => {
    // This function tells us if we are at the first question, last question, or other
    // Return -1 if first, 1 if last, 0 otherwise
    if (this.state.currentQuestionNum === 0) {
      return -1;
    } else if (this.state.currentQuestionNum === this.state.numQuestions - 1) {
      return 1;
    } else {
      return 0;
    }
  };

  handlePrevClick = () => {
    if (this.questionMaxMin() !== -1) {
      this.setState({ currentQuestionNum: this.state.currentQuestionNum - 1 });
    }
  };

  handleNextClick = () => {
    if (this.questionMaxMin() !== 1) {
      this.setState({ currentQuestionNum: this.state.currentQuestionNum + 1 });
    }
  };

  render() {
    return (
      <Fragment>
        <ProgressBarContainer>
          <ProgressBarOuter>
            <InnerBar progress={this.getProgress} />
          </ProgressBarOuter>
        </ProgressBarContainer>
        <QForm>
          <SingleQuestion className="fadeIn">
            {this.state.form[this.state.currentQuestionNum]}
          </SingleQuestion>
          <Buttons>
            <LeftButton
              onClick={this.handlePrevClick}
              visible={this.questionMaxMin()}
            >
              PREVIOUS
            </LeftButton>

            {this.questionMaxMin() !== 1 ? (
              <RightButton onClick={this.handleNextClick}>NEXT</RightButton>
            ) : (
              <NavLink
                onClick={() => {
                  this.props.submit(this.state.formId);
                  this.props.changeActive("Dashboard");
                }}
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <RightButton>SAVE</RightButton>
              </NavLink>
            )}
          </Buttons>
        </QForm>
      </Fragment>
    );
  }
}

const ProgressBarContainer = styled.div`
  margin: 4vh auto;
  width: 75vw;
  text-align: center;
`;

const ProgressBarOuter = styled.div`
  padding: 6px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
  width: 100%;
  background-color: #ef476f;
`;

const InnerBar = styled.div`
  height: 18px;
  border-radius: 30px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
  transition: 0.4s linear;
  transition-property: width, background-color;
  width: ${(props: any) => props.progress}%;
  background-color: #ef5b7d;
`;

const QForm = styled.div`
  margin: 4vh 4vw 0 4vw;
  // padding: 2vh 3vw 2vh 3vw;
  background-color: white;
  border-style: none;
  border-radius: 2vmax;
  box-shadow: 0 0 2px 2px rgb(204, 217, 255);
`;

const SingleQuestion = styled.div`
  padding: 3vh 5vw 2vh 5vw;
`;

const Buttons = styled.div`
  background-color: rgb(153, 179, 255);
  border-bottom-right-radius: 2vmax;
  border-bottom-left-radius: 2vmax;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  user-select: none;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const LeftButton = styled.div`
  width: 50%;
  display: inline-block;
  text-align: left;
  padding-left: 5vw;
  visibility: ${(props: any) => (props.visible === -1 ? "hidden" : "visible")};
`;

const RightButton = styled.div`
  width: 50%;
  text-align: right;
  display: inline-block;
  padding-right: 5vw;
  border-left: 1px solid rgb(153, 102, 255);
`;
