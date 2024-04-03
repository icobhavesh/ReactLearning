//here we learn about life cycle method where we
//component made =render update
// props= render update
//state= render update
//FIRST I AM GOING TO PASS A PROPS AND LATER I AM GOING TO PASS A State
// import React, { Component } from 'react';
// class Parents extends Component{
//     render ()
//     {
//         console.warn("render method",this.props)
//         return (
//             <>
//             <p>hello everyone </p>
//             <h1> user name {this.props.name}</h1>

//             </>
//         )

//     }
// }
// export default Parents;
//IN THE BELOW  LINE WE ARE GOING TO USE STATE
import React, { Component } from "react";
class Parents extends Component {
  constructor() {
    super();
    this.state = {
      Name: "bhavesh",
    };
  }
  render() {
    console.warn("render method", this.state.email);
    return (
      <>
        <p>hello everyone </p>
        {/* <h1> user name {this.props.name}</h1> */}
        <h2>hello my name is {this.state.Name}</h2>
        <button onClick={() => this.setState({ Name: "saxena " })}>
          sumbit
        </button>
      </>
    );
  }
}
export default Parents;
