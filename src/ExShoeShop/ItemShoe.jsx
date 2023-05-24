import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { handleWatchDetail, data } = this.props;

    let { image, name } = data;

    return (
      <div className="col-6">
        {/* <h5>{this.props.data.name}</h5>
        <img src={this.props.data.image} style={{width:"100%"}} alt="" /> */}
        <div className="card text-left h-100 border-danger">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <p className="card-title">{name}</p>
          </div>
          <button
            onClick={() => {
              handleWatchDetail(data);
            }}
            className="btn btn-primary"
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-primary my-1"
            onClick={() => {
              this.props.handleBuyShoe(data);
            }}
          >
            Mua
          </button>
        </div>
      </div>
    );
  }
}
