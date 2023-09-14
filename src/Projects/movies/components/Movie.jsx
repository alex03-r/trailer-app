

import React from 'react'
import { useState } from 'react'
import { ToolTip } from './ToolTip'
import { useNavigate } from 'react-router-dom'

import "../style.css"
export const Movie = (props) => {

    const[showToolTip, setShowToolTip] = useState(false);
    const navigate = useNavigate()

    const navigateToMovieById = (id) => {      
      navigate(`/movie/${id}`)
    }

  return ( 
    <div className='p-0 ms-5 me-2 mt-4' onClick={ () => navigateToMovieById(props.id) }  onMouseOver={() =>  setShowToolTip(true)} onMouseOut={() => setShowToolTip(false)} style={{width:"210px", height:"300px", cursor:"pointer", position:"relative" }} >
        <img  style={{width:"100%", height:"200px", borderRadius:"4%" }} src={props.imgUrl} />
        {           showToolTip && <ToolTip {...props} />  } 
        <p style={{color:"black"}} className="text-center fw-bold " >{props.name}</p>       
        <p style={{color:"black"}} className="text-center fst-italic" >{props.released}</p>  
    </div>
  )
}
