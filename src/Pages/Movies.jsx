import { Footer } from "../components/Footer"
import { MovieList } from "../components/MovieList"
import { Filter } from "../components/Filter"
import { useMovies } from '../Hooks/useMovies'
import { useState } from "react"

export const Movies = () => {

   const { movies  } =  useMovies()
   const[filterMovies, setFilterMovies] = useState(movies)


   function filterMoviesByCategory(category){

    let filteredMovies =  movies.filter(movie => movie.category.trim() === category.trim() )
    if(category == "All") {
        filteredMovies = [...movies];
    }

    setFilterMovies(filteredMovies)

   }

    return (
        <>
         <div className="mt-5" >
            <Filter onFilter={filterMoviesByCategory}  />
         </div>
            <div className="">
                <MovieList movies={filterMovies} />
            </div>
            <Footer />
        </>
    )

}