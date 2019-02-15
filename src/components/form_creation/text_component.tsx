import React, { Component } from "react";
import { TextQuestion } from "../../utils/question_interfaces";
import "../animation.css";

const handleChange = (e: any, updateResponseText: any, id: string) => {
  updateResponseText(e.target.value, id);
};

const TextComponent = (
  props: TextQuestion,
  updateResponseText: any,
  val: string
) => {
  return (
    <form key={props.id} className="slide">
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.id === "email" ? "email" : "text"}
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
          onChange={e => handleChange(e, updateResponseText, props.id)}
          {...(val === "" ? {} : { defaultValue: val })}
        />
      </div>
    </form>
  );
};

export default TextComponent;
