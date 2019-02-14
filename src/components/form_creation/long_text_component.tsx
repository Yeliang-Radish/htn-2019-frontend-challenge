import React, { Component } from "react";
import { LongTextQuestion } from "../../utils/question_interfaces";
import "../animation.css";

const LongTextComponent = (props: LongTextQuestion) => {
  return (
    <form key={props.id} className="slide">
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea className="form-control" id={props.id} rows={3} />
      </div>
    </form>
  );
};

export default LongTextComponent;
