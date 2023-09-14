
import {  useEffect, useState } from 'react'
import { useMovies } from '../Hooks/useMovies'
import { useNavigate } from 'react-router-dom'
import "../style.css" 
import Play from "../assets/play.png"


export const Carrousel = () => {

  const { movies } = useMovies();
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()


  useEffect(() => {

    setInterval(() => {

      setIndex( index =>  {
           return  Math.floor( Math.random() * movies.length) 
      } )
 
    }, 4000)

  },[])


  function navigateToMovieById(id){

    navigate(`/movie/${id}`)

  }


    return (
      <div className='img-carrusel  pt-5 mt-1 border border-light' style={{ marginTop:"10px" , backgroundImage: `url(${movies[index]?.imgUrl})`, height:"100%", objectFit:"cover" }} >     
        <div className=" ms-sm-0 ms-lg-5  ms-xl-5 " >

        <p className='ms-5 h3 mt-3  fw-bold'>{ movies[index]?.name } </p>
          <p className='ms-5 h5 fw-light'>10/08/2022</p>
          <p className='ms-5 '> {movies[index]?.describtion.slice(0, 50) + "..."  } </p>     
 
          <button onClick={() => navigateToMovieById( movies[index]?.id ) } className=' btnWacth ms-5 ' > <img style={{ width:"40px" }} src={Play} /> <p className='mt-2' >Wacth</p> </button>
          </div>
    
      </div> 

    )

}
