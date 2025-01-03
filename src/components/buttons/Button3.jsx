import React from "react";
import "./css/Button3.css";

const Button3 = ({ text, onClick }) => {
  return (
    <button className="button3" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button3;
