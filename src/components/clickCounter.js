import React from "react";
import withCounter from "./withCounter";

class ClickCounter extends React.Component {

  render() {
    console.log(this.props);
    const { count, increaseCount } = this.props;

    return (
      <>
      
        <p>The count on Click is: {count}</p>
        <button onClick={increaseCount}>Click me</button>
      </>
    );
  }
}

export default withCounter(ClickCounter);
