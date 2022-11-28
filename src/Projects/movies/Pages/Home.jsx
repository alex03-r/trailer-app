import React, { useEffect, useState } from 'react'
import { Carrousel } from '../components/Carrousel'
import { Movie } from '../components/Movie';
import { useMovies } from '../useMovies';

export const Home = () => {

  const { movies } = useMovies()

  return (
    <div style={{ marginRight: "0px" }} >
      <div style={{ height: "200px" }} >
        <Carrousel />
      </div>
      <div className='row justify-content-center me-0' style={{ backgroundColor: "#eeeeee", }}>
        {
          movies.map(movie => (

            <Movie key={movie._id} {...movie} />

          ))
        }
      </div>
    </div>
  )
}
