import React from 'react'

export const ToolTip = ({name, category,  describtion}) => {


  return (
    <div className='bg-secondary bg-gradient shadow border rounded z-index ' style={{width:"220px", height:"150px",  position:"absolute" , top:"2px", left:"40px", zIndex:"5"  }} >
        <p className='fw-bold fs-6' > Tittle: {name}</p>   
        <p><strong> Category:</strong>  {category}</p>
        <p><strong>Describtion: </strong>  {describtion.slice(0, 80) + "..."}</p>       
    </div>
  )
}
