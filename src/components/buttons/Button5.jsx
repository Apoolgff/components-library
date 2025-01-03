import React from "react";
import "./css/Button5.css";

const Button5 = ({ text, onClick }) => {
  return (
    <button className="button5" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button5;
