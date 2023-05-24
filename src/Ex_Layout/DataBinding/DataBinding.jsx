import React, { Component } from "react";

export default class DataBinding extends Component {
  //thuộc về class => nếu muốn sử dụng thì đi kèm với "this"
  urlSrc =
    "https://cdn.shopify.com/s/files/1/0009/5879/1732/products/STHECRICKE22101918220copy2_600x.jpg?v=1668183967";
  renderUserAge = () => {
    return <h1>Age : 2</h1>;
  };
  render() {
    //thuộc về function render => khai báo dùng từ khóa let
    let userName = "Alice";
    return (
      <div>
        <h2>DataBinding</h2>
        <p>UserName: {userName}</p>
        <img src={this.urlSrc} alt="" />
        {this.renderUserAge()}
      </div>
    );
  }
}
