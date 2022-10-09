


import React from 'react'
import { useState, useEffect } from 'react'
import "../../reviews/style.css"

export const Carrousel = () => {

  const[movies, setMovies] = useState([]);
  const [index , setIndex] = useState(0);
//  const  { name,  describtion, imgUrl } = movies[index];

useEffect(() => {

  fetch("http://localhost:4000/api/movies")
  .then(res => res.json())
  .then(data => setMovies(data.movies) )
  .catch(error => console.log(error))

}, [])

//"http://res.cloudinary.com/dlsc2062n/image/upload/v1665279039/heroes/mpkldc1q7edhf0rb8snw.jpg"
  return (

    <div className='img-carrusel border ' style={{ marginTop:"10px" , backgroundImage: `url(${movies[0]?.imgUrl})` }}  >
    {/* { describtion }  {name} */}
        <p className='ms-5 h3 fw-bold'>{ movies[0]?.name } </p>
        <p className='ms-5 h5 fw-light'>/2022</p>
        <p className='ms-5 '> {movies[0]?.describtion.slice(0, 50) + "..."  } </p>        
    </div>
  )
}
