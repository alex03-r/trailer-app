
import { Carrousel } from '../components/Carrousel'
import { useMovies } from '../Hooks/useMovies';
import { Footer } from '../components/Footer';
import { Pagination } from '../components/Pagination';
import { MovieList } from '../components/MovieList';
import { useEffect, useState } from 'react';

export const Home = () => {

  const { movies } = useMovies()
  const [index, setIndex] = useState(0)
  const [paginatedMovies, setPaginatedMovies] = useState(movies)
  const amount = 8


  function onNext() {
    setIndex(i => i + amount)

  }

  function onBefore() {
    setIndex(index => index - amount)

  }

  useEffect(() => {

    setPaginatedMovies(movies.slice(index, index + amount))

  }, [index])

  return (
    <div style={{ marginRight: "0px", marginBottom: "0px" }} className='h-75 ' >
      <div style={{ height: "300px", width: "100%" }} >
        <Carrousel />
      </div>
      <MovieList movies={paginatedMovies} />
      <Pagination onNext={onNext} onBefore={onBefore} index={index} amount={amount} />
      <Footer />
    </div>
  )
}
