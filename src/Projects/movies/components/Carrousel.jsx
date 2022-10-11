import React from 'react'
import { useState, useEffect } from 'react'
import "../../reviews/style.css"

export const Carrousel = () => {

  const[movies, setMovies] = useState([]);
  const [index , setIndex] = useState(2);

useEffect(() => {

  fetch("http://localhost:4000/api/movies")
  .then(res => res.json())
  .then(data => setMovies(data.movies) )
  .catch(error => console.log(error))

}, [])


  return (
    <div className='img-carrusel animate animate__backInRight mt-5 pt-5' style={{ marginTop:"10px" , backgroundImage: `url(${movies[index]?.imgUrl})`, height:"200x" }}  >
        <p className='ms-5 h3  fw-bold'>{ movies[index]?.name } </p>
        <p className='ms-5 h5 fw-light'>/2022</p>
        <p className='ms-5 '> {movies[index]?.describtion.slice(0, 50) + "..."  } </p>        
    </div>
  )
}
