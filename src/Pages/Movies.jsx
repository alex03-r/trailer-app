import { Footer } from "../components/Footer"
import { MovieList } from "../components/MovieList"
import { FilterMovies } from "../components/FilterMovies"
import { useMovies } from '../Hooks/useMovies'
import { useState } from "react"

export const Movies = () => {

    const { movies } = useMovies()
    const [filterMovies, setFilterMovies] = useState(movies)


    function filterMoviesByCategory(category) {

        let filteredMovies = movies.filter(movie => movie.category.trim() === category.trim())
        if (category == "All") {
            filteredMovies = [...movies];
        }

        setFilterMovies(filteredMovies)

    }

    return (
        <>
            <div className="mt-5" >
                <FilterMovies onFilter={filterMoviesByCategory} />
            </div>
            <div>
                <MovieList movies={filterMovies} />
            </div>
            <Footer />
        </>
    )

}