import React, { Component } from "react";
import "./styles/signIn.css"

export default class SignIn extends Component{
  constructor() {
    super();
  }
  MyButton() {
    return (
      <button>I'm a button</button>
    );
  }
  
  

  render() {
   
    return (
      <div>
        <div>
        <button className="testClass"> Conect </button>
          Sign in
          <h1> Welcome bitch</h1>
          
          <h2>Hola</h2>
        
        </div>
      </div>
    );
  };
};
