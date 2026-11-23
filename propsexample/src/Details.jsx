import React from 'react'

const Details = (prop) => {
    console.log(prop);
    
  return (
    <div>
        <p>Movie Name : <b>{prop.name}</b></p>
        <p>Actor Name : <b>{prop.actor}</b></p>
        <p>Release Date : <b>{prop.year}</b></p>
        <hr />
    </div>
  )
}

export default Details