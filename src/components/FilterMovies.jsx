



import React from 'react'
import { useMovies } from '../Hooks/useMovies'
import { useEffect } from 'react'
import { useState } from 'react'


export const FilterMovies = ({ onFilter }) => {


    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("All")
    const { movies } = useMovies()

    useEffect(() => {

        let categories = getCategories()
        setCategories(categories)


    }, [])


    function getCategories() {

        let categories = []
        movies.forEach(movie => {

            if (!categories.includes(movie.category)) {

                categories.push(movie.category)
            }
        })
        categories.unshift("All")
        return categories
    }

    return (
        <div className=' d-flex justify-content-center me-0 ' >
            {categories.map(category => (<button className={activeCategory === category ? 'btn btn-light mt-4 active text-capitalize' : 'btn btn-light mt-4 text-capitalize'} onClick={() => {
                setActiveCategory(category)
                onFilter(category)
            }} key={category} >{category}</button>))}
        </div>
    )
}
