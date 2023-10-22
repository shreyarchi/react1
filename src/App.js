import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const wordcount = text.split(/\s/).filter((word) => word !== "").length;
  const handletextchange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Responsive paragraph word counter</h1>
        <textarea
          value={text}
          onChange={handletextchange}
          placeholder="Enter your para here.."
        ></textarea>
        <p>Word count:{wordcount}</p>
      </div>
    </div>
  );
}

export default App;
