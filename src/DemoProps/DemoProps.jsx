import React, { Component } from "react";
import UserInfo from "../UserInfo/UserInfo";

export default class DemoProps extends Component {
  state = {
    username: "alice",
  };
  // state ở đâu thì setSate ở đó
  handleChange = () => {
    //toogle
    let name = this.state.username === "alice"?"bob": "alice";
    this.setState({ username: name });
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        <UserInfo name={this.state.username} handleClick={this.handleChange} />
      </div>
    );
  }
}
