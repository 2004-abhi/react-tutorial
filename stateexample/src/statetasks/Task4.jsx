import React, { useState } from 'react'

const Task4 = () => {
    let[mode,setMode]=useState(false)
    function handle(){
        setMode(!mode)
    }
    let x={backgroundColor:mode?"black":"white",
        color:mode?"white":"black",
        height:"100vh",
        padding:"50px",
        textAlign:"center"
    }
  return (
    <div style={x}>
        <h1>{mode ?"Dark":"Light"}</h1>
        <p>Think Everything That will not Affect You......😴 Understand the Process...👽</p>
        <button onClick={handle}>{mode? "Switch to Light Mode":"Switch to Dark mode"}</button>
    </div>
  )
}

export default Task4