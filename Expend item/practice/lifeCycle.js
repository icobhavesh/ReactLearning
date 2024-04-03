import React, { Component } from "react";
class LifeCycle extends Component {
  constructor() {
    {
      console.warn("constructor");
    }
    super();
    this.state = {
      Name: "bhavesh",
    };
  }

  render() {
    return (
      <>
        {console.warn("render")}

        <h1>hello everyone {this.state.Name} </h1>
      </>
    );
  }
}

export default LifeCycle;
