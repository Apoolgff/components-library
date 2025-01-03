import React from "react";
import "./css/Button4.css";

const Button4 = ({ text, onClick }) => {
  return (
    <button className="button4" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button4;
