import React, { useState, useRef } from "react";
function Multiple() {
  return (
    <>
      <h1> multiple change in same function </h1>
      <FirstChange data={Counter()} />
      <SecondChange data={Counter()} />
      <ThirdChange data={Counter()} />
    </>
  );
}
function FirstChange(props) {
  return (
    <>
      <h2
        style = {{
          color: " black",
          backgroundColor: "blue",
          border: "2px solid red",
          width: "auto",
          marginBottom: 10,
        }}
      >
        {props.data}
      </h2>
    </>
  );
}
function SecondChange(props) {
  return (
    <>
      <h2
        style={{
          color: " yellow",
          backgroundColor: "blue",
          border: "2px solid red",
          width: "auto",
        }}
      >
        {props.data}
      </h2>
    </>
  );
}
function ThirdChange(props) {
  return (
    <>
      <h2
        style={{
          color: " red",
          backgroundColor: "blue",
          border: "2px solid red",
          width: "auto",
        }}
      >
        {props.data}
      </h2>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <>
      <h1>hello i am going to be changed {count}</h1>
      <button onClick={() => setCount(count + 1)}> changeit</button>
    </>
  );
}

export default Multiple;
