import { useState  } from "react"
import Movies from "../data/Movies.json"

export function useMovies(){

    const[movies, setMovies] = useState(Movies);

    // useEffect(() => {

    //     fetch("http://localhost:4000/api/movies")
    //      .then(data => data.json() )
    //       .then( resp => setMovies(resp.movies))

    // },[])
    return { movies , setMovies }

}