//==========> Use Memo <=============
// use memo is only applied in  functional based component .it used to stop the rendering of function  call which un necessary update whenever we 
//it also used use to stop the execution of state and props 
import React ,{useState} from "react"
function Use_memo (){
    const [Name,setName]=useState(0)
    const [surName,setSurname]=useState(0)
    return (
        <>
        <h1>Hello I am a Usememo {Name}</h1>
        <button onClick={()=>setName(Name+1)}>useMemo</button>
        <h2>hello my namesurname is {surName}</h2>
        <button onClick={()=>setSurname(surName+1)}>useMemo</button>
        </>
    )
}
export default Use_memo;