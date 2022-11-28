
import { useState } from 'react'
import { useMovies } from '../useMovies'

import "../style.css" 

export const Carrousel = () => {


  const { movies } = useMovies();
  let index = 0;

    return (
      <div className='img-carrusel animate animate__backInRight mt-4 pt-5' style={{ marginTop:"10px" , backgroundImage: `url(${movies[index]?.imgUrl})`, height:"100%" }}  >
          <p className='ms-5 h3  fw-bold'>{ movies[index]?.name } </p>
          <p className='ms-5 h5 fw-light'>10/08/2022</p>
          <p className='ms-5 '> {movies[index]?.describtion.slice(0, 50) + "..."  } </p>        
      </div>
    )

}
