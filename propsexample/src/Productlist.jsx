// import React from 'react'
// import Productsdetails from '../Productsdetails'

// const Productlist = () => {
//   return (
//     <div>
//         <Productsdetails item="Mobile" price={26000}/>
//     </div>
//   )
// }

// export default Productlist

// import React from 'react'
// import Productsdetails from '../Productsdetails'

// const Productlist = () => {
//     let details={
//         item:"shoes",
//         price:4500,
//         brand:"nike"
//     }
//   return (
//     <div>
//         <Productsdetails data={details}/>
//     </div>
//   )
// }

// export default Productlist



import React from 'react'
import Productsdetails from '../Productsdetails'
const Productlist = () => {
  return (
    <div>
        <Productsdetails item="Laptop" brand="hp"/>
        <Productsdetails item="Shoe" brand="Nike"/>
        <Productsdetails item="Watch" />
        <Productsdetails />
    </div>
  )
}

export default Productlist