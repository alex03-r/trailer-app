import React, { useEffect, useState } from 'react'

import { Carrousel } from '../components/Carrousel'
import { Movie } from '../components/Movie';
import { getMovies } from "../helpers/getMovies"


export const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    // fetch("http://localhost:4000/api/movies")
    //   .then(res => res.json())
    //    .then(data => setMovies(data.movies))
    //     .catch(error => console.log(error))

    getMovies().then(data => setMovies(data.movies) )
    

  }, [])


  return (
    <div style={{width:"100vw" }}   >
        <div style={{height:"200px"}} >
          <Carrousel />
        </div>
        <div className='row justify-content-center' style={{ backgroundColor: "#eeeeee", width:"100vw" }}>
          {
            movies.map(movie => (
              <Movie key={movie._id} {...movie} />
            ))

          }
        </div>
    </div>
  )
}
