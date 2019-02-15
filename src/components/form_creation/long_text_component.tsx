import React, { Component } from "react";
import { LongTextQuestion } from "../../utils/question_interfaces";
import "../animation.css";

const handleChange = (e: any, updateResponseText: any, id: string) => {
  updateResponseText(e.target.value, id);
};

const LongTextComponent = (
  props: LongTextQuestion,
  updateResponseText: any,
  val: string
) => {
  return (
    <form key={props.id} className="slide">
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
          className="form-control"
          id={props.id}
          rows={3}
          onChange={e => handleChange(e, updateResponseText, props.id)}
          {...(val === "" ? {} : { defaultValue: val })}
        />
      </div>
    </form>
  );
};

export default LongTextComponent;
