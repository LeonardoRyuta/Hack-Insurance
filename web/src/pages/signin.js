import React, { Component } from "react";

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
        Sign in
      </div>
    );
  };
};