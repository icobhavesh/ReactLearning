//isme kya hota hai na yr ye rendering ko rok deti hai mtlb agar apan ne ek bar value declere kr di to usse click krne pr bar 
//bar usse render nahhi hona chaiye iske liye hum render component ka use krte hai  
import React, { PureComponent } from 'react'
class Componentpure extends PureComponent{
    constructor(){
        super()
        this.state= {
            count:1
        }
        
    }
    render(){
        console.warn("check rendering");
    return  (
        <>
        {/* <h1>hello world </h1> */}
        <h1>hello i am bhavesh {this.state.count}</h1> <br></br>
        <button onClick={()=> this.setState({count:1})}>click me </button>
        </>
    )
    }
}
export default Componentpure;