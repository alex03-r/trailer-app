

import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { useParams , useLocation } from 'react-router-dom'
import { getMovies } from '../helpers/getMovies';

export const MovieSelected = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  let location = useLocation();
  let index = movies.findIndex(movie => movie._id === id);

  function getCurrentWidth() {

    if (window.screen.width >= 1367) {
      return 1170;
    } else if (window.screen.width > 1024 && window.screen.width <= 1366) {
      return 1170;
    } else if (window.screen.width > 640 && window.screen.width < 1025) {
      return 900;
    } else {
      return 600;
    }

  }

  useEffect(() => {
    getMovies().then(data => setMovies(data.movies));

  }, [])

  useEffect(() => {

    let w = getCurrentWidth();
    console.log("width " + w);

  }, [window.screen.width])


  return (
    <div className=' mt-5' style={{ backgroundColor: "#eeeeee", heigth: "100vh" , width:"98vw"}} >

      <div className="container-lg ms-lg-4 ps-lg-3 mt-4 ps-xl-5 ms-xl-5 d-flex">

        <div className=" container ps-sm-3 p-lg-4 ps-xl-0 mt-4 w-25  me-sm-4 me-lg-0">
          <img src={movies[index]?.imgUrl} style={{ borderRadius: "4%" }} />
        </div>
        <div className="container-lg ms-sm-5 ms-lg-0 ms-0  mt-5 ">

          <p className="h1" >  Movie:  {movies[index]?.name || "default movie name"}</p>
          <p className='text-capitalize' > <strong>Category:</strong>  {movies[index]?.category || "default category name"}</p>
          <p className='text-capitalize'> <strong>Author:</strong>  {movies[index]?.author}</p>
          <p className='fw-bold' >{movies[index]?.describtion}</p>
        </div>

      </div>

      <div className="container-lg ms-sm-0 ms-lg-4 ms-xl-5 mt-5 ps-sm-4 pe-sm-5  ps-lg-5 ps-xl-5 me-xl-1   pb-xl-2"  >
        <iframe width={getCurrentWidth()} height="615" src={movies[index]?.movieSrcUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  ></iframe>
      </div>
    </div>
  )
}
