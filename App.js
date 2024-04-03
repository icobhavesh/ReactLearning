// import logo from './logo.svg';
import "./App.css";

// import Expend from './Expend item/Expenditem';
// import Receive from './Expend item/practice/Funrecive';
import LifeCycle from "./Expend item/practice/lifeCycle";
// import Parents from './Expend item/practice/lifeCycle2';
// import React,{useState} from 'react'
// import Apps from './Expend item/practice/Component-Did- Mountt';
// import Update from './Expend item/practice/Component-Did update';
import Bhavesh from "./Expend item/practice/Bhavesh.should";
import Vichle from "./Expend item/practice/Hooks.js/Useeffect";
// import Data from './Expend item/practice/Arraysss.';
//  import Chaild from './Expend item/practice/ChaildToParents';
import Controlled from "./Expend item/practice/Hooks.js/ConttolledComponent";
// import Tabledata from './Expend item/practice/Hooks.js/html';
// import Multiple from './Expend item/practice/Hooks.js/Multiplechange';
// import Use_memo from './Expend item/practice/Hooks.js/Use-memo';
import Useref from "./Expend item/practice/Hooks.js/UseRef";
// import Componentpure from './Expend item/practice/Purecomponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Tabledata from './Expend item/practice/Hooks.js/Home';

import NavBar from "./Expend item/NavBar";
import Home from "./Expend item/Home";
// import Menu from './Expend item/Menu'
import About from "./Expend item/About";
import State from "./Expend item/practice/Hooks.js/state";
import ChaildA from "./Expend item/propsDrilling/chaild 1";
import Myval from "./Expend item/propsDrilling/chaild to parents";
import Inputfield from "./Expend item/propsDrilling/inputfield";
import Use_memo from "./Expend item/practice/Hooks.js/Use-memo";
import Faching from "./Expend item/Facthing Api/Api";
import FachingData from "./Expend item/Facthing Api/FatchingData";

// import Contact from "./html"

function App() {
  function getdata(data) {
    console.log(data);
  }
  // //this example belong to input field
  // function Senddata(snd){
  //   console.log(snd);

  // }
  // const name="bhavesh"
  // function ToParents(sndIt){
  //   alert(sndIt)
  // }
  // const [name , setName]= useState("bhavesh")
  //   function innerFunc(){
  //      alert ("hello i am inner function which will going to transfer as a props ")
  // }

  return (
    //  {/* <Receive   title={innerFunc}/> */}
    <>
      {/* <State/> */}
      {/* <Myval getdata={getdata}/> */}
      {/* <LifeCycle>
       
        </LifeCycle>  */}

      {/* <BrowserRouter>
    <NavBar/>
     <Routes>
    <Route path="/Home" element={<Home/>}/>
     
     <Route path="/About" element={<About/>}/>
     </Routes> 
      
     </BrowserRouter> */}

      {/* <Parents/> */}
      {/* <Parents name={name}
     />
     <button onClick={()=> setName("siddarth")}>submit</button> */}
      {/* <Update/> */}
      {/* <Bhavesh/> */}
      {/* <Apps/> */}
      <Vichle />
      {/* <Data/> */}
      {/* <Chaild
     send={ToParents}
    /> */}
      {/* <Componentpure/> */}
      {/* <Use_memo/> */}
      {/* <Useref/> */}
      {/* <Controlled/> */}
      {/* <Multiple/> */}
      {/* <Tabledata/> */}
      {/* <ChaildA title ={name}/> */}
      {/* <Inputfield sendData={Senddata}/>
<Use_memo/> */}
      {/* <Faching/> */}
      {/* <FachingData/> */}
    </>
  );
}

export default App;
