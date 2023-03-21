import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
const Home = () => {
    const [counter, setCounter ] = useState(0);
    const [step, setStep ] = useState(1);
    const submit = (e)=>{
        console.log(step);
        setStep(step)
    }

    return (
    <div>
        <label >Enter increment step:</label>
        <input name="step" type="number"  value={step} onChange={(e)=>{setStep(+e.target.value)}}/> 
        <br/>
        <button  title="Decrement" onClick={(e)=>{console.log(typeof(counter),typeof(step));setCounter(counter-step)}} >DECREMENT</button>
        {counter}
        <button  title="Decrement" onClick={(e)=>{console.log(typeof(counter),typeof(step));setCounter(counter+step)}} >INCREMENT</button>
    </div>
  )
}


Home.propTypes = {
    step: PropTypes.number,
    counter: PropTypes.number
  };

export default Home
