import React, { useState } from 'react'

const product = (x) => {
    let [quantity,setQuantity]= useState(1)
    function increment(){
        setQuantity(quantity+1)
    }
    function decrement(){
        setQuantity(quantity-1)
    }

  return (
    <div>
        <p>Product Name : <b>{x.item} </b> </p>
        <p>Product Price : <b>{x.price}</b></p>
        <p>Quantity : <b>{quantity}</b></p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>Total Price : {quantity*x.price}</p>
        <hr />
    </div>
  )
}

export default product