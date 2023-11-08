import React, { Component } from 'react'

export default class TestComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
  render() {
    return (
      <div>TestComponent <br/>
        {/* <input value={this.state.value} onChange={(e)=>{
            console.log("initial state: ",this.state.value);
            this.setState({value:e.target.value});
            console.log("final state: ",this.state.value);
        }} /> */}
        <p> Use callback to get the latest state update</p>
        <input value={this.state.value} onChange={(e)=>{
            console.log("initial state: ",this.state.value);
            this.setState({value:e.target.value},()=>{
                console.log("with callback state: ",this.state.value);
            });
            console.log("final state: ",this.state.value);
        }} />

      </div>
    )
  }
}
