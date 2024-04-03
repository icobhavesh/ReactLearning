// this is only work when we update a props and state 
// dont update states in  componentDidUpdate() if we can do like that they will go in infinity mode
// use if condition if you wanted to update state od ir
import React, { Component } from 'react';
class Update extends Component{
    constructor(){
        super()
        this.state={
           count:0
        }
        console.warn("constructor");
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.warn("componnent",preState.count);
        // this.setState({count:this.state.count+1}) if i use like this will enter in a infinite loop
        console.warn("componnent",preState.count,this.state.count);
    //     if(preState.count===this.state.value){
    //    alert("plz stopped it ")
    //     }
    if(this.state.count < 11){
        this.setState({count:this.state.count+1})
    }
       
    }
    render(){
        console.warn("render");
        return (
            <div>2
                <h1>My Count number is  {this.state.count}</h1>
                <button onClick={()=> this.setState({count:1})}>colors</button>
            </div>
        )
    }
}
export  default Update ;