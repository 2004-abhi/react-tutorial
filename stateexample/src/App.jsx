// import React from 'react'

// const App = () => {
//   let count=0;
//   function f1(){
//     count++;
//     console.log(count);
    
//   }
//   return (
//     <div>
//       <p>Count : <b>{count}</b></p>
//       <button onClick={f1}>Increment</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   let[branch,setbranch]=useState("Kochi")
//   function qspiders(){
//     setbranch("Some Where......😴")
//   }
//   return (
//     <div>
//       <p>Branch Name : <b>{branch}</b></p>
//       <button onClick={qspiders}>Change Branch</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from './Counter'
// const App = () => {
//   return (
//     <div>Count the Numbers ........ 🫡
//       <Counter/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Task1 from './statetasks/Task1'
import Task2 from './statetasks/Task2'
import Task3 from './statetasks/Task3'
import Task4 from './statetasks/Task4'
import Shopping from './Shopping'

const App = () => {
  return (
    <div>
      <Shopping/>
    </div>
    
  )
}

export default App