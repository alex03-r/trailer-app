import React , { useEffect, useState } from 'react'

import { Carrousel } from '../components/Carrousel'
import { Movie } from '../components/Movie';


export const Home = () => {


  const[movies, setMovies] = useState([]);

  // const obtainMovies =  async () => {
  //   getMovies().then(data => console.log(data))
  //   // console.log(movies)
  // }
  
  useEffect(() => {

    fetch("http://localhost:4000/api/movies")
    .then(res => res.json())
    .then(data => setMovies(data.movies) )
    .catch(error => console.log(error))
    // obtainMovies();\ 
  
  }, [])
  

  return (
      <>
           <Carrousel movies={movies} />

            <div className= 'container ms-4 row'>
                  {          

                    movies.map(movie => (
                      <div className='container col' >
                            <Movie key={movie._id} {...movie} />
                      </div>
              
                    ))
                  }
            </div>
      </>
  )
}
