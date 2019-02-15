import React, { Component } from "react";
import { SelectQuestion } from "../../utils/question_interfaces";
import "../animation.css";

const handleChange = (e: any, updateResponseText: any, id: string) => {
  updateResponseText(e.target.value, id);
};

const SelectComponent = (
  props: SelectQuestion,
  updateResponseText: any,
  val: string
) => {
  return (
    <form key={props.id} className="slide">
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <select
          onChange={e => handleChange(e, updateResponseText, props.id)}
          defaultValue={val === "" ? "default" : val}
          className="form-control"
          id={props.id}
        >
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
