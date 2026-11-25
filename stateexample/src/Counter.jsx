import React, { useState } from 'react'

const Counter = () => {
    let[count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        if(count<=0){
            return
        }
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
        <p>Count Value : <b>{count}</b></p>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter