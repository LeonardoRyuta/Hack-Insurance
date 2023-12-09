import React, { Component } from "react";
import "./styles/claim.css"

export default class Claim extends Component{
  constructor() {
    super();
    this.state = {
      show: false,
      input: ""
    }
  }


  render() {
    return(
    <div className="center">
      <div className="card">
        <h1 className=""> Claim </h1>
        <div className="claimContainer">
          <input className="truc" placeholder="Type here ..." onChange={(e) => {this.setState({...this.state, input: e.target.value})}} />

        </div>
        <button className="centerButton" onClick={()=> {this.setState({...this.state, show:true})}}> Query </button>
      </div>
      {
        this.state.show == true ? 
        <div className="card truc2"style={{marginLeft: '20px'}}>
            <div><h2>Results</h2><p>Claim this amount of ETH</p></div>
            <button className="centerButton" onClick={()=> {}}> Claim </button>


        </div>
        :null
      }
    </div>
    );

  };


};