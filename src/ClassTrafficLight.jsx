import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    colorIndex: 0,
  };

  switchColorIndex = () =>
    this.state.colorIndex !== 0
      ? this.setState({ colorIndex: this.state.colorIndex - 1 })
      : this.setState({ colorIndex: 2 });

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={
              this.state.colorIndex === 0 ? "circle red" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.colorIndex === 1 ? "circle yellow" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.colorIndex === 2 ? "circle green" : "circle black"
            }
          ></div>
        </div>
        <button className="next-state-button" onClick={this.switchColorIndex}>
          Next State
        </button>
      </div>
    );
  }
}
