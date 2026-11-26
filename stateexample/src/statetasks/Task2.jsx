// import React, { useState } from 'react'

// const Task2 = () => {
//     let [skills,setSkills]=useState(
//         ["HTML","CSS","JAVASCRIPT"]
//     )
//     console.log(skills);// []
//     function handle(){
//         setSkills([...skills,"REACT"])
//     }
    
//   return (
//     <div>
//         {skills.map((ele)=>{
//             return (
//                 <ul>
//                     <li>{ele}</li>
//                 </ul>
//             )}
//         )}
//         <button onClick={handle}>Change Skill</button>
//     </div>
//   )
// }

// export default Task2

// there is a problem it add react again and again so we use condition to stop



import React, { useState } from 'react'

const Task2 = () => {
    let [skills,setSkills]=useState(
        ["HTML","CSS","JAVASCRIPT"]
    )
    console.log(skills);// []
    function handle(){
        let newSkill="REACT";
        if(!skills.includes(newSkill)){
            setSkills([...skills,"REACT"])
        }
        else{
            alert("Skill already exists!")
        }
            
    }
    
  return (
    <div>
        {skills.map((ele)=>{
            return (
                <ul>
                    <li>{ele}</li>
                </ul>
            )}
        )}
        <button onClick={handle}>Change Skill</button>
    </div>
  )
}

export default Task2