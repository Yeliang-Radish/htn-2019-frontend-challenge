import React, { Component } from "react";

const TextComponent = (props: any) => {
  return (
    <form>
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
