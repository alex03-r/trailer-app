import { useMovies } from "../useMovies"


export const Pagination =  ({ onNext, onBefore, index, amount }) => {

    const { movies } = useMovies()

    const nextFirstMovie = movies[index + ( amount + 1 ) ];
    const beforeFirstMovie = movies[index - 1];

    return(

        <div className=" bg-subtle me-5 pe-5 d-flex flex-row-reverse " >

            <div className="d-flex gap-2" >
       
                <button disabled={ beforeFirstMovie ? false : true} className="btn btn-light"  onClick={onBefore} >Before</button>
                <button disabled={ nextFirstMovie ? false : true }  className="btn btn-primary" onClick={onNext}  >Next</button>
            </div>

        </div>
    )



}