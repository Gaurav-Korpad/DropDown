// import React, { useState } from 'react'
 
// function Main() {

//   const[toggle,setToggle] = useState(true)
//   const handleClick = () => {
//     setToggle(!toggle)
//   }

//   return (
//     <>
//   <div onClick={(handleClick)}> style={{backgroundColour: toggle && "red"}}Hello</div>

//   <div onClick={(handleClick)}> style={{backgroundColour: !toggle && "red"}}World</div>

//     </>
//   )
// }

// export default Main

import React from 'react'
import Dropdowntask from "./Dropdowntask/Drop"
function Main() {
  return (
    <>
    
      <Dropdowntask/>
     
    </>
  )
}

export default Main


