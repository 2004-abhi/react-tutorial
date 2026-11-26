import React, { useState } from 'react'

const Task3 = () => {
    let [show,setShow]=useState(true)
    function handle(){
        setShow(!show)
    }
  return (
    <div>
        <input type={show ? "text":"password"} name='' id='' />
        <button onClick={handle}>{show ? "hide":"show"}</button>
    </div>
  )
}

export default Task3