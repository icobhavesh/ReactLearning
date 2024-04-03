//controlled component  wo ho j0 state se declere kya jate hai mtlb jinme direrctly dom method use nahi hota hai 

import React, { useRef} from 'react';
function Controlled() {
    const inputRef=useRef(null)
    function getValue(){
        // inputRef.current.value="controlled component";
        // inputRef.current.style.display="none";
        // inputRef.current.style.color="red"
        inputRef.current.value="saxena "
        inputRef.current.style.color="red"
        inputRef.current.style.backgroundColor="grey"

    }
    return <>
     <input type="text" ref={inputRef}></input>
    {/* <input type ="text" ref={inputRef}></input> */}
    <button onClick={getValue}>click here</button>
    </>
    
}
export default Controlled;




























