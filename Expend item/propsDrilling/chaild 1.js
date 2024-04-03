import React from 'react'
import ChaildB from './chaild 2';
import ChaildC from './chaild3';

function ChaildA({title}) {
  return (
    <>
  <h1> hello i am a chaild A {title}</h1>
  <ChaildB title={title}/>

  </>
  )
}   


export default ChaildA;