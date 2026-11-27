// import React from 'react'

// export const App = () => {
//   function f1(){
//     alert("After dec 15th no one will come.....")
//   }
//   return (
//     <div>App</div>
//   )
// }



import React from 'react'

const App = () => {
  function f1(user){
    alert("after dec 15th no one will come")
    console.log(user,"shocked");
    
  }
  return (
    <div>
      <button onClick={()=>{f1("ankitha")}}>Click</button>
    </div>
  )
}

export default App