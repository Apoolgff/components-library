import React from "react";
import "./css/Button1.css";

const Button1 = ({ text, onClick }) => {
  return (
    <button className="button1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button1;
