import React, { Component } from "react";
import { movieArr } from "./date";
import ItemMovie from "./ItemMovie";

export default class RenderWithMap extends Component {
  renderMovieList =  () => {
    return movieArr.map(function (item, i) {
        return (
           <ItemMovie item={item} ong={"123"}/>
        );
    });
};
render() {
    return <div className="row">{this.renderMovieList()}</div>;
}
}
