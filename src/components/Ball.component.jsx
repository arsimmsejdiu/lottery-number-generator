import React, { Component } from "react";
import "./Ball.style.css";

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        {this.props.num}
      </div>
    );
  }
}

export default Ball;
