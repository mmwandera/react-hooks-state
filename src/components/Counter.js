import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Testing Asynchronous Nature of setState
  function increment() {
    // console.log(`before setState: ${count}`) // => 0
    // setCount(count + 1);
    // console.log(`after setState: ${count}`) //=> 0
    
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  // console.log(`After Function call: ${count}`) //=> 1 

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
