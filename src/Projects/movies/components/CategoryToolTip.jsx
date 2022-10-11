

import React, { useState, useEffect } from 'react'
import { getMovies } from '../helpers/getMovies'

export const CategoryToolTip = () => {

    const [movies, setmovies] = useState([])

    useEffect(() => {

        getMovies().then(data => setmovies(data.movies) )

    }, [])
    


  return (

    <div className='row row-cols-2 bg-dark bg-gradient ' style={{position:"absolute", top:"30px", right:"280px" , color:"black" }} >

        <div className='border w-100' >

            {
                movies.map(mCategory => (
                    <p className='border w-100' key={ mCategory._id }>{mCategory.category}</p>
                ))
            }
        </div>
        
    </div>
  )
}
