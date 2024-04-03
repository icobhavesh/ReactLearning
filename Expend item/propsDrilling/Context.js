//we should remember three thing before we use context api create,provider,cosumer
import React, { createContext } from "react";
// import Context_snd from "./context_snd";
import Usecontext from "./usecontext";
//cretion , provider , consumer 
const Store=createContext()
function  SecondRendering(){
    const data="hacker   "
    return (
        <>
        <Store.Provider value={data}>
            <Usecontext/>
        </Store.Provider>
        </>
    )
}
    export {Store}
    export default SecondRendering ;

































































    // const name="bhavesh";
    // const surname="saxena";
    // return (
    //     <>
    //     <h1>hello i am a context api function </h1>
    //     <Data.Provider  value={name}>
    //        <Data1.Provider value={surname}>
    //         <Context_snd/>
    //     </Data1.Provider>
    //     </Data.Provider>
    //     </>
    // )}
    // export {Data,Data1}
    // export  default SecondRendering
