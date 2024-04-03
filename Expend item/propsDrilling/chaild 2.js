import React from 'react'
import ChaildC from './chaild3';

function ChaildB({title}) {
  return (
    <>
  <h1> hello i am a chaild B {title}</h1>
  <ChaildC title={title}/>
  {/*         we can also use different name for send variable  */}
  </>
  )
}

export default ChaildB;