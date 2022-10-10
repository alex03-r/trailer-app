


import React from 'react'
import { useState, useEffect } from 'react'
import "../../reviews/style.css"

export const Carrousel = () => {

  const[movies, setMovies] = useState([]);
  const [index , setIndex] = useState(2);
//  const  { name,  describtion, imgUrl } = movies[index];



useEffect(() => {

  setIndex(0)
  fetch("http://localhost:4000/api/movies")
  .then(res => res.json())
  .then(data => setMovies(data.movies) )
  .catch(error => console.log(error))

}, [])


useEffect(() => {
  
  setTimeout(() => {
  
    setIndex(index  => index + 1)

  }, 6000)

  console.log("hello")

},[])

  return (

    <div className='img-carrusel' style={{ marginTop:"10px" , backgroundImage: `url(${movies[index]?.imgUrl})` }}  >
    {/* { describtion }  {name} */}
        <p className='ms-5 h3 fw-bold'>{ movies[index]?.name } </p>
        <p className='ms-5 h5 fw-light'>/2022</p>
        <p className='ms-5 '> {movies[index]?.describtion.slice(0, 50) + "..."  } </p>        
    </div>
  )
}
