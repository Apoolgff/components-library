import React from "react";
import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";
import Button3 from "./buttons/Button3";
import Button4 from "./buttons/Button4";
import Button5 from "./buttons/Button5";

const Buttons = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "2rem" }}>
      <Button1 text="Button 1" onClick={() => alert("Button 1 clicked!")} />
      <Button2 text="Button 2" onClick={() => alert("Button 2 clicked!")} />
      <Button3 text="Button 3" onClick={() => alert("Button 3 clicked!")} />
      <Button4 text="Button 4" onClick={() => alert("Button 4 clicked!")} />
      <Button5 text="Button 5" onClick={() => alert("Button 5 clicked!")} />
    </div>
  );
};

export default Buttons;
