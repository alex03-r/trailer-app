import React, { useEffect, useState } from 'react'

import { Carrousel } from '../components/Carrousel'
import { Movie } from '../components/Movie';


export const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/api/movies")
      .then(res => res.json())
       .then(data => setMovies(data.movies))
        .catch(error => console.log(error))


  }, [])


  return (
    <div>
      <div>
        <Carrousel />
      </div>
      <div className='row justify-content-center ' style={{ backgroundColor: "#002984", width: "100vw", marginRight: "0px", height: "100vh" }}>
        {

          movies.map(movie => (

            <Movie key={movie._id} {...movie} />

          ))

        }
      </div>
    </div>
  )
}
