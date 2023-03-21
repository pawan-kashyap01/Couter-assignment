import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import Item from "./Item";
import Items from "./Items";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const [step, setStep] = useState(1);
  const [mytimeout, setMytimeout] = useState(null);
  const [counterList, setCounterList] = useState([]);
  const [pause, setPause] = useState(false);

  const getItems = useMemo(() => {
    return counterList;
  }, [counterList]);

  function handleDelete(e, ind) {
    e.preventDefault();
    console.log("delete", ind, counterList);
    // for(let i=0; i<=99999999;i++){
    //   console.log();
    // }
    delete counterList[ind];
    // let a = 0;
    // setCounterList(counterList.splice(ind,1));
    setCounterList(counterList);
    console.log(counterList);
  }

  function handlePause(e) {
    setPause(!pause);
    console.log('pause=',pause)
    if (!pause) {
      clearTimeout(mytimeout);
    } else {
      resumeCounter();
    }
  }
  function resumeCounter() {
    setMytimeout(
      setTimeout(() => {
        setCounter(counter + step);
        setCounterList([...counterList, counter]);
      }, 1000)
    );
  }
  function resetCounter() {
    setCounter(0);
    setCounterList([]);
    if (step != 0) {
      resumeCounter();
    }
  }

  useEffect(() => {
    if (step != 0 && !pause) {
      resumeCounter();
    }
  }, [counter,counterList]);

  useEffect(() => {
    resetCounter();
  }, [step]);
  


  

  
  return (
    <div>
      <label>Enter increment step:</label>
      <input
        name="step"
        type="number"
        value={step}
        onChange={(e) => {
          clearTimeout(mytimeout);
          setStep(+e.target.value);
        }}
      />
      <br />
      <button
        style={{
          border: "1px solid black",
          color: "blue",
          padding: "5px 15px",
          textAlign: "center",
          display: "inline-block",
          fontSize: "13px",
        }}
        onClick={(e) => {
          handlePause();
        }}
      >
        {pause ? `Resume` : `Pause`}
      </button>

      <h2>Counter: {counter}</h2>
      <Items getItems={getItems}  handleDelete={handleDelete}/>
      {/* <ol>
        {counterList.map(
          (val, i) =>
            val !== undefined && (
              <Item val={val} key={i} ind={i} handleDelete={handleDelete} />
            )
        )}
      </ol> */}
    </div>
  );
};

export default Counter;
