// import  { useEffect, useState } from "react"

import { useEffect, useState } from "react";

function Faching() {
  const [states, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(
      (res) => {
        res.json().then((result) => {
          // document.write(result.name)
          setState(result);
        });
      }
    );
  }, []);
  console.log(states);

  return (
    <>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>postId</td>
      </tr>

      {states.map((item) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.postId}</td>
          </tr>
        );
      })}
      <h1>hello i am a function </h1>
    </>
  );
}
export default Faching;
