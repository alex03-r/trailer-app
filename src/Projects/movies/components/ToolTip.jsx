import React from 'react'

export const ToolTip = ({name, describtion}) => {


  return (
    <div className='bg-secondary.bg-gradient shadow' style={{width:"220px", height:"150px",  position:"relative" , top:"2px" , zIndex:"auto" }} >
        <p className='fw-bold' >{name}</p>   
        <p>  {describtion.slice(0, 80) + "..."}</p>       
    </div>
  )
}
