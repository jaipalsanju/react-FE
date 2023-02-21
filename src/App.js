import React from "react";
import "./style.css";

function click(){
  alert("I'm here to learn React, React is a library for JS")
}

export default function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <h3>i'm sanju and click below for more </h3>
      <button onClick={click}>click</button>
    </div>
  );
}
