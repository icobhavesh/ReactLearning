
import React,{createRef} from 'react'
class Useref extends React.Component{
    constructor ()
    { 
        super()
        this.inputRef=createRef()
    }
    getVal(){
        this.inputRef.current.value=""
        this.inputRef.current.style.color="blue"
        this.inputRef.current.style.backgroundColor="black"
    }
    
    render(){
        return (
            <>
            <input type="text" ref={this.inputRef}/><br></br>
            <button onClick={()=>this.getVal() }> Submit Here </button>
            </>
        )
    }
}
export default Useref;