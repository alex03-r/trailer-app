import React from 'react'
import logoPeli from '../assets/logoPeli.jpg'
import { Link }   from "react-router-dom";

export const NavBar = () => {

  return (
     
    <div>
            <nav className="navbar navbar-expand-lg ps-5 navbar-light bg-light">
           
                <div className="container-fluid">
                    <a className="navbar-brand"> <Link  to="/" > <img style={{width:"50px"}} src={logoPeli} /> </Link></a>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/' style={{color:"black"}} >
                                <p>Home</p>
                            </Link>
                            <Link to='/movie'>
                                Genero
                            </Link>       
                        </ul>
                        <div className="d-flex pe-5  ps-0 ">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />                
                        </div>
                    </div>
                </div>
            </nav>    
    </div>    
 
  )
}
