import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  handleTang = ()=>{
    console.log("yes Tang");
  };
  handleGiam = ()=>{
    console.log("yes Giam");
  };

  render() {
    return (
      <div>
        <h2>DemoState</h2>
        <button onClick={this.handleGiam} >-</button>
        <span>{this.state.soLuong}</span>
        <button onClick={this.handleTang} >+</button>
      </div>
    );
  }
}
