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
      <div className="center">
        <div className="card">
          <h1 className=""> Subscribe </h1>
          <div className="insuranceContainer">
            <div className="insuranceCard">
              <p className="insuranceText margin-0"> Insurance 1 </p>
              <p className="margin-0"> Covers: </p>
              <ul className="margin-0">
                <li>Lending Protocols</li>
                <li>Liquidity Pools</li>
              </ul>
              <div style={{flex: 1}}></div>
              <p>0.05 ETH / month</p>
            </div>
          </div>
          <button className="centerButton" onClick={()=>{console.log("Hiiiiii")}}> Purchase </button>
        </div>
      </div>
    );
  };
}