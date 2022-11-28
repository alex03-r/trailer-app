import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useMovies } from '../useMovies'

export const SearchMovieList = ({ searchText, setSearchText }) => {

    const navigate = useNavigate();

    const { movies } = useMovies()
  
    const [filterMovies, setFilterMovies] = useState([]); 

    useEffect(() => {
        const filteredMoviesResult = movies.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterMovies(filteredMoviesResult);
    }, [searchText])

    const navigateTotMovie = (id) => {

        navigate(`/movie/${id}`)
        setSearchText("")
    }


    return (

        <ul className='list-group text-center' >
            {
                filterMovies.map(movie => (

                    <li key={movie._id} onClick={() => navigateTotMovie(movie._id)} className='list-group-item' style={{ cursor: "pointer" }} >
                        {movie.name}
                    </li>
                ))
            }
        </ul>
    )

}
