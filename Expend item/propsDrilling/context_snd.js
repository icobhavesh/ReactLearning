import React from 'react'
import { Data, Data1 } from './Context'

export default function Context_snd() {
   return (
      <>
         <Data.Consumer>{
            (name) => {
               return (
                  <Data1.Consumer>{
                     (surname) => {
                        return <h1>my name  is {name} and my surname is {surname} </h1>
                     }

                  }

                  </Data1.Consumer>
               )
            }



         }

         </Data.Consumer>
      </>
   )
}