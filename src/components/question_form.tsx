import React, { Component } from "react";
import { QuestionSet, Question } from "../utils/question_interfaces";
import questionParser from "../utils/form_utils";

type FormProps = {
  questionSet: QuestionSet;
};
interface State {
  questions: Question[];
  formId: string;
  formLabel: string;
  form: any[];
}

export default class QuestionForm extends Component<FormProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: this.props.questionSet.questions,
      formId: this.props.questionSet.id,
      formLabel: this.props.questionSet.label,
      form: []
    };
    console.log(this.props);
  }

  getForm = () => {
    let form = questionParser(this.state.questions);
    this.setState({ form });
  };

  componentDidMount() {
    this.getForm();
    console.log(this.state, "The State");
  }

  render() {
    return <div>{this.state.form.map((C: any) => C)}</div>;
  }
}
