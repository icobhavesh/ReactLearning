import React from "react";
import { Store } from "./Context";
import {useContext} from 'react'
function Usecontext(){
    const values =useContext(Store)
    return (
        <>
        <h1>hello my name  is {values}</h1>
        </>
    )
}
export default Usecontext;