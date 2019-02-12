import React, { Component, Fragment } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import questionParser from "../utils/form_utils";

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
      <Fragment>
        <div>{this.state.form[this.state.currentQuestionNum]}</div>
        <div className="btn-toolbar" role="toolbar">
          <div className="btn-group" role="group">
            <button
              onClick={this.handlePrevClick}
              type="button"
              className={`btn btn-${
                this.questionMaxMin() === -1 ? "secondary" : "primary"
              }`}
              {...this.questionMaxMin() === -1 && { disabled: true }}
            >
              Previous
            </button>
          </div>
          <div className="btn-group" role="group">
            <button
              onClick={this.handleNextClick}
              type="button"
              className={`btn btn-${
                this.questionMaxMin() === 1 ? "secondary" : "primary"
              }`}
              {...this.questionMaxMin() === 1 && { disabled: true }}
            >
              Next
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
