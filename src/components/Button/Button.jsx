import React from "react";
import "./button.css";

const Button = (props) => {
  const { name } = props;
  return <button className="button_style">{name}</button>;
};

export default Button;
