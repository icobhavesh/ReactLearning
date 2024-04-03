import {useState} from 'react'

function Myval(props){
    const [Name,setName]= useState("name")
    function myname(){
        props.getedata(Name)

    }
    return (
<>
<h1>my value will be {Name}</h1>
<button onClick={()=>setName("yuvi")}> sumbit me </button>
</>        
    )
}
export default Myval