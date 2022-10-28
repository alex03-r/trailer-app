
import React from 'react'
import { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMovies'
import { useNavigate } from "react-router-dom"

export const SearchMovieList = ({ searchText, setSearchText }) => {

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {

        getMovies()
            .then(data => setMoviesList(data.movies))
    }, [])

    useEffect(() => {
        const filteredMoviesResult = moviesList.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()))
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
