import React from 'react'

export const ToolTip = ({name, describtion}) => {


  return (
    <div className='bg-secondary bg-gradient shadow border rounded' style={{width:"220px", height:"150px",  position:"absolute" , top:"2px", left:"80px"  }} >
        <p className='fw-bold' > Tittle: {name}</p>   
        <p> Describtion:  {describtion.slice(0, 80) + "..."}</p>       
    </div>
  )
}
