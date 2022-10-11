import React from "react";
import "./button.scss";

const Button = ({ name, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
