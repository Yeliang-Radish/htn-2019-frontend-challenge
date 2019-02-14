import React, { Component, Fragment } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import questionParser from "../utils/form_utils";
import styled from "styled-components";
import "./animation.css";

type FormProps = {
  questionSet: QuestionSet;
  submit: any;
};
interface State {
  questions: Question[];
  numQuestions: number;
  formId: string;
  formLabel: string;
  form: any[];
  currentQuestionNum: number;
}

export default class QuestionForm extends Component<FormProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: this.props.questionSet.questions,
      numQuestions: this.props.questionSet.questions.length,
      formId: this.props.questionSet.id,
      formLabel: this.props.questionSet.label,
      form: [],
      currentQuestionNum: 0
    };
  }

  getForm = () => {
    let form = questionParser(this.state.questions);
    this.setState({ form });
  };

  componentDidMount() {
    this.getForm();
  }

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
            <RightButton onClick={() => this.props.submit(this.state.formId)}>
              SUBMIT
            </RightButton>
          )}
        </Buttons>
      </QForm>
    );
  }
}

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
  font-family: "Montserrat";
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
