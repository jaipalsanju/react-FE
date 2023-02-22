import React from "react";
import "./style.css";

function click(){
  alert("I'm here to learn React, React is a library for JS")
}
// class jaipal extends App{
//   constructor(Props){
//     super(Props);
//     this.obj={
//       name:'sam',
//       age:21,
//     }



export default function App() {

  return (
    <div>
      <h1>Welcome to React</h1>
      <h3>i'm sanju and and my friend is{}</h3>
      <button onClick={click}>click</button>
    </div>
  );

}


