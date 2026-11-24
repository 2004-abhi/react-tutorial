// import React from 'react'

// const Productsdetails = (x) => {
//     console.log(x); // {item : "Mobile" , price : 26000}
//     let {item,price}=x  // destructuring
//   return (
//     <div>
//         <p>Product Name : {item}
//         <p>Product Price : {price}</p>
//         </p>
//     </div>
//   )
// }

// export default Productsdetails


// import React from 'react'

// const Productsdetails = (x) => {
//     // console.log(x);  //{data:{item:"shoes",price:333,brand:"nike"}}
//     // console.log(x.data.brand);  // noraml way
    
//     let {data:{item,price,brand}}=x   // destructuring
//   return (
//     <div>
//         <h1>Product Name : {item}</h1>
//         <h1>Product Price : {price}</h1>
//         <h1>Product Brand : {brand}</h1>
//     </div>
//   )
// }

// export default Productsdetails


import React from 'react'

const Productsdetails = (x) => {
    console.log(x);
    let {item="bag",brand="skybag"}=x  //adding default value to props
    

  return (
    <div>
         <h1>Product Name : <b>{item}</b></h1>
        
        <h1>Product Brand : <b>{brand}</b></h1>
        <hr />
    </div>
  )
}

export default Productsdetails