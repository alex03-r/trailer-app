import React from 'react'

export const ToolTip = (props) => {


  return (
    <div className='bg-dark bg-gradient border rounded z-index ' style={{ width: "auto", height: "auto", position: "absolute", top: "2px", left: "40%", right: "-50px", zIndex: "5", color: "whitesmoke" }} >
      <p className='fw-bold fs-6 ms-2' > Tittle: {props.name}</p>
      <p className='ms-2'><strong> Category:</strong>  {props.category}</p>
      <p className='ms-2'><strong>Describtion: </strong>  {props.describtion.slice(0, 80) + "..."}</p>
    </div>
  )
}
