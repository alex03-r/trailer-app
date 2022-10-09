


import React from 'react'
import { useState } from 'react'
import "../../reviews/style.css"

export const Carrousel = ({ movies }) => {

  const [index , setIndex] = useState(0);
//  const  { name,  describtion, imgUrl } = movies[index];

  return (

    <div className='img-carrusel' style={{ marginTop:"10px" , backgroundImage: `url("http://res.cloudinary.com/dlsc2062n/image/upload/v1665279039/heroes/mpkldc1q7edhf0rb8snw.jpg")` }}  >
    {/* { describtion }  {name} */}
        <p className='ms-5 h3 fw-bold'>la torta </p>
        <p className='ms-5 h5 fw-light'>/2022</p>
        <p className='ms-5 '>the bacl </p>
        
    </div>
  )
}
