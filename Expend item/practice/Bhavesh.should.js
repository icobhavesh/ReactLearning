import React, { Component } from 'react';
class Bhavesh extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    //    console.warn("constructor",this.state.counter); 
    }
    shouldComponentUpdate(){
        if(this.state.counter>1  && this.state.counter <50){
            return true ;
        }
    }
    render(){
        return (
            <div>
                <h1>Hello Friends {this.state.counter}</h1>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>click here</button>
            </div>
        )


}
}
export default Bhavesh