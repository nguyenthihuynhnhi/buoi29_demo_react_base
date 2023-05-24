import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";

export default class ExShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };

  handleViewDetail = (shoe) => {
    this.setState({ detailShoe: shoe });
  };

  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];

    //copy shoe vào newShow và thêm key soLuong
    let index = cloneCart.findIndex((item) => item.id === shoe.id);
    let newShoe = { ...shoe, soLuong: 1 };

    if (index === -1) {
      cloneCart.push(newShoe);
    } else {
      // cloneCart[index].soLuong++
      cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
    }

    // this.setState({ cart: cloneCart });
    // cloneCart.push(newShoe);
    //th1: sp chưa có trong giỏ hàng => push
    //th2: sp đã có trong giỏ hàng => không push
    //cloneCart.push(shoe);
    this.setState({ cart: cloneCart });
  };

  handleDelete = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe);
    // gọi axios
    this.setState({ cart: cloneCart });
  };

  handleChangAmount = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    cloneCart[index].soLuong = cloneCart[index].soLuong + option;
    //số lượng có thể +1 hoặc -1

    if (cloneCart[index].soLuong === 0) {
      //sau khi update soLuong, nếu bằng 0 thì xóa
      cloneCart.splice(index, 1);
    }
    this.setState({ cart: cloneCart });
  };

  render() {
    const payloadCartShoe = {
      handleChangAmount: this.handleChangAmount,
      handRemove: this.handleDelete,
      cart: this.state.cart,
    };
    return (
      <div>
        <div className="row">
          <div className="col-6">
            {/* <CartShoe handleChangAmount={this.handleChangAmount} handRemove={this.handleDelete} cart={this.state.cart} /> */}
            <CartShoe payloadCartShoe={payloadCartShoe} />
          </div>
          <div className="col-6">
            <ListShoe
              handleBuy={this.handleAddToCart}
              handleWatchDetail={this.handleViewDetail}
              list={this.state.shoeArr}
            />
          </div>
        </div>

        <DetailShoe detail={this.state.detailShoe} />
      </div>
    );
  }
}
