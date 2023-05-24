import React, { Component } from "react";

export default class ExStateCar extends Component {
  state = {
    nhi: "rất đợp",
    url: "./img/CarBasic/products/black-car.jpg",
  };
  handleColor(color) {
    this.setState({
      nhi: "Long đẹp trai",
      url: `./img/CarBasic/products/${color}-car.jpg`,
    });
    console.log("🏊🏼‍♀️ 👙 ExStateCar 👙 handleColor 👙 color:", color);
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div>
            <img style={{ width: "100%" }} src={this.state.url} alt="" />
          </div>
        </div>
        <div className="col-4">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              this.handleColor("black");
            }}
          >
            {this.state.nhi}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              this.handleColor("silver");
            }}
          >
            Silver
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.handleColor("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
