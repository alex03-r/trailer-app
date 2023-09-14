
import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovies } from '../Hooks/useMovies'
import { Footer } from '../components/Footer';


export const MovieSelected = () => {

  const { id } = useParams();
  const { movies } = useMovies();
  let index = movies.findIndex(movie => movie.id === parseInt(id));

  return (
    <div className='mt-5' style={{ heigth: "90vh", width: "98vw" }} >
      <div className="container-lg ms-lg-4 ps-lg-3 mt-4 ps-xl-5 ms-xl-5 d-flex">
        <div className=" container ps-sm-3 p-lg-4 ps-xl-0 mt-4 w-25  me-sm-4 me-lg-0">
          <img src={movies[index]?.imgUrl} style={{ borderRadius: "4%" }} />
        </div>
        <div className="container-lg ms-sm-5 ms-lg-0 ms-0  mt-5 ">
          <p className="h1" >  Movie:  {movies[index]?.name || "default movie name"}</p>
          <p className='text-capitalize' > <strong>Category:</strong>  {movies[index]?.category || "default category name"}</p>
          <p className='text-capitalize'> <strong>Released:</strong>  {movies[index]?.released}</p>
          <p className='' ><strong>Description: </strong>{movies[index]?.describtion}</p>
        </div>
      </div>
      <div className="container-lg ms-sm-0 ms-lg-4 ms-xl-5 mt-3 mb-5 ps-sm-4 pe-sm-5  ps-lg-5 ps-xl-5 me-xl-1 pb-xl-2"  >

        <iframe className="border rounded" width="100%" height="615" src={movies[index]?.movieSrcUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >

        </ iframe>

      </div>
      <Footer />
    </div>
  )
}
