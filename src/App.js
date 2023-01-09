import React, { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(200);
  const incrementData = () => {
    setCount(count + 1);
    console.log("incremented value");
  };
  const Decrementdata = () => {
    setDecrement(decrement - 1);
    console.log("Decrement value");
  };
  // const multiply = () => {
  //   console.log("multiply  function");
  //   return count * 10;
  // };

  const multiplyfunction = useMemo(() => {
    console.log("multiply  function");
    return count * 10;
  }, [count]);
  return (
    <>
      {multiplyfunction}
      {/* {multiply()} */}
      <div style={{ width: "70%", margin: "15px auto" }}>
        <h2>count{count}</h2>
        <button
          style={{ padding: "10px 20px", margin: "10px" }}
          onClick={incrementData}
        >
          Incrment
        </button>

        <button
          style={{ padding: "10px 20px", margin: "10px" }}
          onClick={Decrementdata}
        >
          Decrement
        </button>
        <h2>decrement {decrement}</h2>
      </div>
    </>
  );
};

export default App;
