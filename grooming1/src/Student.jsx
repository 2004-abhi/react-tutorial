import React from "react"
const Student = (prop) => {
    console.log(prop);
    return(
        <div>
            <h2>MacFast Victims Details</h2>
            <p>Victim Name : {prop.name}</p>
            <p>Victim Rollno : {prop.rollNo}</p>
        </div>
    )  
}
export default Student