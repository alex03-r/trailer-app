

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovies } from '../helpers/getMovies';

export const MovieSelected = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  let index = movies.findIndex(movie => movie._id === id);

  useEffect(() => {
    getMovies().then(data => setMovies(data.movies) )
  
  }, [])

  return (
    <div className=' mt-5' style={{ backgroundColor: "#eeeeee", heigth: "100vh" }} >

      <div className="container mt-4  d-flex">

        <div className="container p-4 mt-4 w-25 ">
          <img src={movies[index]?.imgUrl} style={{ borderRadius: "4%" }} />
        </div>
        <div className="container ms-0  mt-5 ">

          <p className="h1" >  Movie:  {movies[index]?.name || "default movie name"}</p>
          <p className='text-capitalize' > <strong>Category:</strong>  {movies[index]?.category || "default category name"}</p>
          <p className='text-capitalize'> <strong>Author:</strong>  {movies[index]?.author}</p>
          <p className='fw-bold' >{movies[index]?.describtion}</p>
        </div>

      </div>
    
         <div className="container  ms-5 mt-5 ps-5 pb-3" >
            <iframe width="1100"   height="615" src={movies[index]?.movieSrcUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
         </div>
      
  

    </div>
  )
}
