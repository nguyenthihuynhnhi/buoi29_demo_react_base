import React, { Component } from "react";

export default class UserInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>UserInfo</h2>
        <h1>Username:{this.props.name} </h1>
        <button onClick={this.props.handleClick} className="btn btn-success">
          Change name to Bob
        </button>
      </div>
    );
  }
}
