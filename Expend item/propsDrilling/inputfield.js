import React, { useState } from "react";

function Inputfield(props) {
  const [value, setVal] = useState("");
  const Myvalue = (val) => {
    val.preventDefault();
    props.sendData(value);
  };
  return (
    <>
      <form onSubmit={Myvalue}>
        <div>inputfield</div>
        <input
          type="text"
          value={value}
          onChange={(e) => setVal(e.target.value)}
        ></input>
        <button>click here </button>
      </form>
    </>
  );
}

export default Inputfield;
