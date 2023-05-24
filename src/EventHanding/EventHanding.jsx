import React, { Component } from "react";

export default class EventHanding extends Component {
  //đặt tên là handle là biết nó dùng để sử lý sự kiện
  handleSayHello = () => {
    console.log("hello user");
  };
  handleSayHelloWithName = (username) => {
    console.log(`🏊🏼‍♀️ 👙 ${username}`);
    return {};
  };
  render() {
    return (
      <div>
        <h2>EventHanding</h2>
        {/* nhớ dùng "this" khi muốn dùng function - function "không để ()" vì vừa
        gắn vào là sẽ chạy luôn,không đợi onclick */}
        <button className="btn btn-success" onClick={this.handleSayHello}>
          Say Hello
        </button>
        <br />
        {/* dùng arrow function đối với hàm có tham số  */}
        <button
          onClick={() => {
            this.handleSayHelloWithName("Alice");
          }}
        >
          Say hello with name
        </button>
      </div>
    );
  }
}
