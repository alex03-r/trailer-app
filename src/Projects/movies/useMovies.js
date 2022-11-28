import { useState, useEffect } from "react"

export function useMovies(){

    const[movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("http://localhost:4000/api/movies")
         .then(data => data.json() )
          .then(movies => setMovies(movies))

    },[])

    return { movies }

}