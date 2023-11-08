import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleIncreaseCount() {
      console.log(this.state);
      this.setState({ ...this.state, count: this.state.count + 1 });
    }

    render() {
      return (
        <>
        {this.props.children}
        <WrappedComponent
        {...this.props}
          count={this.state.count}
          increaseCount={()=>this.handleIncreaseCount()}
        />
        </>
       
      );
    }
  }

  return WithCounter;
};

export default withCounter;
