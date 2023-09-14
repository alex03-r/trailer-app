import { useNavigate } from "react-router-dom"
import { useMovies } from '../Hooks/useMovies'

export const SearchMovieList = ({ searchText, setSearchText }) => {

    const navigate = useNavigate();
    const { movies } = useMovies();
   
    const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()))
   
    const navigateToMovieById = (id) => {

        navigate(`/movie/${id}`)
        setSearchText("")
    }

    return (

        <ul className='list-group text-center' >
            {
                filteredMovies.map(movie => (

                    <li key={movie.id} onClick={() => navigateToMovieById(movie.id)} className='list-group-item' style={{ cursor: "pointer" }} >
                        {movie.name}
                    </li>
                ))
            }
        </ul>
    )

}
