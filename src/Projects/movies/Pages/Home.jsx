import React , { useEffect, useState } from 'react'

import { Carrousel } from '../components/Carrousel'

export const Home = () => {


  const[movies, setMovies] = useState([]);
//
  useEffect(() => {

    fetch("http://localhost:4000/api/movies")
    .then(res => res.json())
    .then(data => setMovies(data.movies) )
    .catch(error => console.log(error))
  
  }, [])
  


  return (
    <>

    <Carrousel/>

    <div className='container mt-3'>
          movies
    </div>


    </>

  )
}
