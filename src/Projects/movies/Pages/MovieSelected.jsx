

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieSelected = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  let index = movies.findIndex(movie => movie._id === id);

  useEffect(() => {

    fetch("http://localhost:4000/api/movies")
      .then(res => res.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error))

  }, [id])

  return (
    <div className=' mt-4' style={{ backgroundColor: "#bbdefb", heigth: "100vh" }} >

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
      <div className="container ms-5 mt-5 ps-5 pb-3">
        <iframe width="1100"  height="615" src="https://www.youtube.com/embed/2kzxPG4cz2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  )
}
