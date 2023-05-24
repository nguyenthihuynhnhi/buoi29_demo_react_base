import React, { Component } from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-4 p-0">
            <Navigation />
          </div>
          <div className="col-8 p-0">
            <Content/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
