

import React, {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const MovieSelected = () => {

  const { id } = useParams();
  const[movies, setMovies] = useState([]);
  let   index = movies.findIndex( movie => movie._id === id);
  useEffect(() => {

    
    fetch("http://localhost:4000/api/movies")
    .then(res => res.json())
    .then(data => setMovies(data.movies) )
    .catch(error => console.log(error))

  
  
  }, [])


  const { name , category } = movies[index];

    
  return (
      <div className='container mt-4'>

           {/* <p> { JSON.stringify( movies[index] ) }</p>          */}
           <p className="h1" >Movie:  { name || "just" }</p>    
           <p className="h4 fw-light ">Category:  { category || "dddn" }</p>  
      </div>
  )
}
