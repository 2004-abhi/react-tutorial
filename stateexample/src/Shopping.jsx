import React from 'react'
import Product from './product'

const Shopping = () => {
  return (
    <div>
      <Product item="Watch" price={6000} />
      <Product item="Shirt" price={3500} />
      <Product item="Laptop" price={54000} />
    </div>
  )
}

export default Shopping