// import React, { useState } from 'react'

// const Task1 = () => {
//     let [details,setDetails]=useState(
//         {
//             user:"Abhi",
//             course:"React",
//             city:"Delhi"
//         },
//          {
//             user:"Abu",
//             course:"React",
//             city:"Kochi"

//         })
//     console.log(details);//{}
//     console.log(details.city);
//     function handle(){
//         setDetails({...details,city:"Alappuzha..😎"})
//     }
        
//   return (
//     <div>
//         <p>User name:{details.user}</p>
//         <p>Course name:{details.course}</p>
//         <p>City name:{details.city} </p>
//         <button onClick={handle}>Chanage City</button>
//         <hr />
//     </div>
//   )
// }

// export default Task1


// 2. Correct method: Store both objects inside an array
// If you want to store two users in details, use an array containing both objects.

import React, { useState } from 'react'

const Task1 = () => {

    let [details, setDetails] = useState([
        {
            user: "Abhi",
            course: "React",
            city: "Delhi"
        },
        {
            user: "Abu",
            course: "React",
            city: "Kochi"
        }
    ])

    console.log(details);

    function handle() {
        setDetails(
            details.map((ele) => ({
                ...ele,
                city: "Alappuzha..😎"
            }))
        )
    }

    return (
        <div>
            {details.map((ele, index) => (
                <div key={index}>
                    <p>User name: {ele.user}</p>
                    <p>Course name: {ele.course}</p>
                    <p>City name: {ele.city}</p>
                    <hr />
                </div>
            ))}

            <button onClick={handle}>Change City</button>
        </div>
    )
}

export default Task1