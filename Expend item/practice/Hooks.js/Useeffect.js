// hooks are  used to stop the execution of multiple state and props to run together
// it is mixup of all lifecycle method so lets begin WITH it
import React, { useState, useEffect } from "react";

function Vichle() {
  const [increment, setName] = useState(10);
  const [decrement, setSurname] = useState(-1);
  useEffect(() => {
    console.warn("called  BOTH COMPONENT");
  }, [decrement]);
  //bracet notetion is used to which function we wanted to call or rendered again

  return (
    <>
      <h1>Namaste India</h1>
      <h1>Name{increment}</h1> <br />
      <h1>name{decrement}</h1>
      <br />
      <button onClick={() => setName(increment + 1)}> INCREMENT</button>{" "}
      <br></br>
      <button onClick={() => setSurname(decrement - 1)}> DECREMENT</button>
    </>
  );
}
export default Vichle;
