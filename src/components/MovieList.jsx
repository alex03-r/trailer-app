
import { Movie } from "./Movie"

export const MovieList = ( { movies }) => {

   
    return (
        <div className='row justify-content-center me-0' >  
        {
          movies.map(movie => (

            <Movie key={movie.id} {...movie} />

          ))
        }
      </div>
    )


}