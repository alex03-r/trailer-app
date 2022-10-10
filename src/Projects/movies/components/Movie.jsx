

import React from 'react'
import { useState } from 'react'
import { ToolTip } from './ToolTip'
import { useNavigate } from 'react-router-dom'


export const Movie = (props) => {

    const[showToolTip, setShowToolTip] = useState(false);
    const navigate = useNavigate()

    const selectMovie = (id) => {
      
      navigate(`/movie/${id}`)
    }


  return ( 
    <div className='p-0 ms-5 me-5 mt-4' onClick={ () => selectMovie(props._id) }  onMouseOver={() =>  setShowToolTip(true)} onMouseOut={() => setShowToolTip(false)} style={{width:"210px", height:"300px", cursor:"pointer", position:"relative" }} >
      <img style={{width:"100%", height:"200px", borderRadius:"4%" }} src={props.imgUrl} />
      {
        showToolTip && <ToolTip {...props} />
      } 
      <p style={{color:"white"}} className="text-center" >{props.name}</p>       
    </div>
  )
}
