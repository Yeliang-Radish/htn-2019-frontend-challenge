import React, { Component } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import { questionParser } from "../utils/form_utils";

type FormProps = {
  questionSet: QuestionSet;
};
interface State {
  questions: Question[];
  formId: string;
  formLabel: string;
}

export default class QuestionForm extends Component<FormProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: this.props.questionSet.questions,
      formId: this.props.questionSet.id,
      formLabel: this.props.questionSet.label
    };
    console.log(this.props);
  }

  componentDidMount() {
    questionParser(this.state.questions[2]);
  }

  render() {
    return <h1>This is the form</h1>;
  }
}
