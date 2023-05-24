import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let { payloadCartShoe } = this.props;
    let { handleChangAmount, handRemove, cart } = payloadCartShoe;
    console.log(
      "🏊🏼‍♀️ 👙 CartShoe 👙 render 👙 payloadCartShoe:",
      payloadCartShoe
    );
    return (
      <div>
        {/* B4tabledefault  */}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index} className="">
                  <td>{item.name}</td>
                  <td >
                    <div className="h-100 d-flex align-items-center ">
                      <button
                        onClick={() => {
                          handleChangAmount(item.id, -1);
                        }}
                        className="btn btn-warning"
                      >
                        -
                      </button>
                      <strong className="mx-3">{item.soLuong}</strong>
                      <button
                        onClick={() => {
                          handleChangAmount(item.id, 1);
                        }}
                        className="btn btn-success"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <img style={{ width: "50%" }} src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handRemove(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
