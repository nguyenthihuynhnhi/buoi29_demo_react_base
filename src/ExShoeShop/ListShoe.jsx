import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return (
        <ItemShoe
          handleBuyShoe={this.props.handleBuy}
          handleWatchDetail={this.props.handleWatchDetail}
          key={index}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
