import React from 'react'
import Details from './Details'

const Movielist = () => {
  return (
    <div>
        <Details name="AOT" year={2026} actor="Dulquer"/>
        <Details name="KJF" year={2023} actor="Yash"/>
        <Details name="OM" year={2026} actor="Dhanush"/>
        <Details name="X-Man" year={2007} actor="Hugh Jackman"/>
    </div>
  )
}

export default Movielist