import React, { Component } from "react";
import "./styles/subscribe.css"

export default class Subscribe extends Component{
  constructor() {
    super();
    this.state = { 
      input : null
    }
  }

  render() {
    return(
      <div>
        <h1 className="subscribeText"> Subscribe </h1>
        <h2 className="writeYourInfoHereText"> Write your info here: </h2>
        <input placeholder="Type here" onChange={(e) => {this.setState({input : e.target.value})}}/>
        <button onClick={()=>{console.log("Hiiiiii")}}> Subscribe </button>
        <p>{this.state.input}</p>
      </div>
    );
  };
}