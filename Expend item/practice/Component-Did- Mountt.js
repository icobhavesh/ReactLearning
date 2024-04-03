import React, { Component } from 'react';
class Apps extends Component{
    constructor(){
        super()
        this.state={
            color:"red"
        }
        console.warn("constructor");
    }
    componentDidMount(){
        console.warn("componnent");
    }
    render(){
        console.warn("render");
        return (
            <div>
                <h1>my jeans color is {this.state.color}</h1>
                <button onClick={()=> this.setState({color:"blue"})}>colors</button>
            </div>
        )
    }
}
export  default Apps ;