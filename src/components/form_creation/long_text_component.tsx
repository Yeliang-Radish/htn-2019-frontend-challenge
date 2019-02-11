import React, { Component } from "react";

const LongTextComponent = () => {
  return <div key={Math.floor(Math.random() * 100 + 1)}>Long Text</div>;
};

export default LongTextComponent;
