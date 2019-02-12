import React, { Component } from "react";
import { TextQuestion } from "../../utils/question_interfaces";

const TextComponent = (props: TextQuestion) => {
  return (
    <form key={props.id}>
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.id === "email" ? "email" : "text"}
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    </form>
  );
};

export default TextComponent;
