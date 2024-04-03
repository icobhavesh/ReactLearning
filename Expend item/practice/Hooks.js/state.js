import {useState} from "react"
import React from 'react'

const State = () => {
    const [name,setName]=useState("bhavesh")
    const setname=()=> setName("saxena")
  return (
    <div>
        <h1>hello i am a state hook</h1>
        <input type="text" value={name}></input>
        <button onClick={setname}>Change state</button>

    </div>
  )
}

export default State