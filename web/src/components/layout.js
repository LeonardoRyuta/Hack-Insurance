import React, { Component, Children } from "react"
import "./styles/layout.css"
import Navbar from "./navbar";
import Footer from "./footer";

export default class Layout extends Component{
  constructor() {
    super();
  };

  render() {
    return (
      <div className="structure">
        <Navbar />
        {
          this.props.children
        }
        <Footer />
      </div>
    );
  };
}