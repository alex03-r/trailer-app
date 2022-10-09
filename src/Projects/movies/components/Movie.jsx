

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
    <div className='border' onClick={ () => selectMovie(props._id) }  onMouseOver={() =>  setShowToolTip(true)} onMouseOut={() => setShowToolTip(false)} style={{width:"200px", height:"200px", cursor:"pointer", position:"absolute" }} >
      <img style={{width:"100%", height:"170px"}} src={props.imgUrl} />
      {
        showToolTip && <ToolTip {...props} />
      } 
      <p className='h3' >{props.name}</p>
       
    </div>
  )
}
