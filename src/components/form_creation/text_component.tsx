import React, { Component } from "react";

const TextComponent = () => {
  return <div key={Math.floor(Math.random() * 100 + 1)}>Text</div>;
};

export default TextComponent;
