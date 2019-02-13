import React, { Component, Fragment } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import questionParser from "../utils/form_utils";
import styled from "styled-components";

type FormProps = {
  questionSet: QuestionSet;
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
    // console.log(this.state, "The State");
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
    console.log(this.state.currentQuestionNum, "rocks");
  };

  handleNextClick = () => {
    if (this.questionMaxMin() !== 1) {
      this.setState({ currentQuestionNum: this.state.currentQuestionNum + 1 });
    }
    console.log(this.state.currentQuestionNum, "balls");
  };

  render() {
    // return <div>{this.state.form.map((C: any) => C)}</div>;
    return (
      <QForm>
        <div>{this.state.form[this.state.currentQuestionNum]}</div>
        <div>
          <LeftButton
            onClick={this.handlePrevClick}
            type="button"
            className={`btn btn-${
              this.questionMaxMin() === -1 ? "secondary" : "primary"
            }`}
            {...this.questionMaxMin() === -1 && { disabled: true }}
          >
            Prev
          </LeftButton>
          <RightButton
            onClick={this.handleNextClick}
            type="button"
            className={`btn btn-${
              this.questionMaxMin() === 1 ? "secondary" : "primary"
            }`}
            {...this.questionMaxMin() === 1 && { disabled: true }}
          >
            Next
          </RightButton>
        </div>
      </QForm>
    );
  }
}

const QForm = styled.div`
  padding: 5vh 7vw 0 7vw;
`;

const RightButton = styled.button`
  float: right;
`;

const LeftButton = styled.button`
  float: left;
`;

const ButtonsDiv = styled.div`
  padding: 0 5vw;
`;
