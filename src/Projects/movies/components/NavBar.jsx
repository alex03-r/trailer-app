import React from 'react'
import logoPeli from '../assets/logoPeli.jpg'
import { Link }   from "react-router-dom";

export const NavBar = () => {

  return (
     
 
            <nav className="navbar navbar-expand-lg ps-5 navbar-light bg-light mb-0 pb-0" style={{ height:"60px" }}>
           
                <div className="container-fluid">
                   <Link  to="/" > <img style={{width:"50px"}} src={logoPeli} /> </Link>
                    <div className='d-flex me-4' >
                     <ul className='d-flex me-4 mt-1' >
                            <Link to='/' className='me-2' style={{color:"black", textDecoration:"none"}} >
                                <p>Home</p>
                            </Link>
              
                            <Link to='/movie' style={{color:"black", textDecoration:"none"}}>
                                Genero
                            </Link>   
                     </ul>
                            <input class="form-control h-25 me-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    
                </div>
            </nav>    
        
 
  )
}
