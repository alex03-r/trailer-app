
import {  useEffect, useState } from 'react'
import { useMovies } from '../useMovies'
import "../style.css" 

export const Carrousel = () => {

  const { movies } = useMovies();
  const [index, setIndex] = useState(0)


  useEffect(() => {

    setInterval(() => {

      setIndex( index =>  {

           return  Math.floor( Math.random() * movies.length) 
      } )
      // 
    }, 4000)

    console.log(" se cambio ")

  },[])


    return (
      <div className='img-carrusel   pt-5 mt-1 border border-light' style={{ marginTop:"10px" , backgroundImage: `url(${movies[index]?.imgUrl})`, height:"100%", objectFit:"cover" }} >     
          <p className='ms-5 h3 mt-3  fw-bold'>{ movies[index]?.name } </p>
          <p className='ms-5 h5 fw-light'>10/08/2022</p>
          <p className='ms-5 '> {movies[index]?.describtion.slice(0, 50) + "..."  } </p>        
      </div>
    )

}
