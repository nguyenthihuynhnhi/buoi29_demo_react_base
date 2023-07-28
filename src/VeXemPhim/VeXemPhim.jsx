import React, { Component } from "react";
import ListChair from "./ListChair/ListChair";
import SelectedChair from "./SelectedChair/SelectedChair";
import "./VeXemPhim.css";

export default class VeXemPhim extends Component {
  render() {
    return (
      <div className="bg-body ">
        <div className="container text-white">
          <div className="row pt-5">
            <div className="pe-5 col-6 border border-primary viewZindex">
              <ListChair />
            </div>
            <div className="ps-5 col-6 border border-primary viewZindex">
              <SelectedChair />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
