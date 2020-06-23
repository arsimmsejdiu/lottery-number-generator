import React, { Component } from "react";

import Ball from "./Ball.component";
import "./Lottery.style.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery Numbers",
    numBalls: 6,
    maxNum: 40,
  };

  state = {
    nums: Array.from({ length: this.props.numBalls }),
  };

  generate = () => {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button className="Button" onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
