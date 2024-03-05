import React, { Component } from "react";

class SampleComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "Pink",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState);
    // console.log(this.state);
    // console.log(this.props.data);
    if (
      nextProps?.data !== this.props.data ||
      nextState?.color !== this.state.color
    ) {
      // console.log("gg");
      return true;
    } else {
      return false;
    }
  }

  changeColor() {
    console.log("here");
    this.setState({ ...this.state, color: "red" });
  }

  render() {
    console.log("This is child class component");
    const { data, handleCounter } = this.props;
    return (
      <>
        <p>This is SampleCompoenets</p>
        <p> Counter: {this.props.data}</p>
        <button onClick={() => handleCounter(data + 1)}>Click me count</button>
        <h1>My Favotite color is {this.state.color}</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
      </>
    );
  }
}

export default SampleComponents;
