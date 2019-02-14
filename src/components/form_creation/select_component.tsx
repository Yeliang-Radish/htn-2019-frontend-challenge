import React, { Component } from "react";
import { SelectQuestion } from "../../utils/question_interfaces";
import "../animation.css";

const SelectComponent = (props: SelectQuestion) => {
  return (
    <form key={props.id} className="slide">
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <select defaultValue="default" className="form-control" id={props.id}>
          <option value="default" disabled>
            Select Answer
          </option>
          {props.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SelectComponent;
