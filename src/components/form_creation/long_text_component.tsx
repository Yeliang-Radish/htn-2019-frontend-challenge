import React, { Component } from "react";

const LongTextComponent = (props: any) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea className="form-control" id={props.id} rows={3} />
      </div>
    </form>
  );
};

export default LongTextComponent;
