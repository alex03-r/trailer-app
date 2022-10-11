import React from 'react'
import { ToolTip } from './ToolTip';
import logoPeli from '../assets/logoPeli.jpg'
import { Link }   from "react-router-dom";
import { SearchMovieList } from "../components/SearchMovieList"
import {CategoryToolTip } from "../components/CategoryToolTip"
import { useState } from 'react';



export const NavBar = () => {

    const [searchText, setSearchText] = useState("") ;
    const [showCategory, setShowCategory] = useState(false) ;

  return (    
 
            <nav className="navbar fixed-top navbar-expand-lg ps-5 navbar-light bg-light mb-0 pb-0" style={{ height:"60px" }}>
           
                <div className="container-fluid">
                   <Link  to="/" > <img style={{width:"50px"}} src={logoPeli} /> </Link>
                    <div className='d-flex me-4' >
                     <ul className='d-flex me-4 mt-2' >
                            <Link to='/' className='me-2' style={{color:"black", textDecoration:"none"}} >
                                <p>Home</p>
                            </Link>
              
                            {/* <Link to='/'  onMouseOut={() => setShowCategory(false)}  onMouseOver={() => setShowCategory(true)} style={{color:"black", textDecoration:"none", position:"relative" }}>
                                Category
                            </Link> */}
                            {/* {
                              showCategory && <CategoryToolTip />
                            }                           */}
                     </ul>
                      <input class="form-control h-25 mt-1 me-2" style={{position:"relative"}} value={searchText} type="search " onChange={(e) => setSearchText(e.target.value) } placeholder="Search movie" aria-label="Search" />
                      {
                        searchText.length > 0 &&   <SearchMovieList searchText={searchText}  setSearchText={setSearchText} />
                      }
                   
                    </div>
                    
                </div>
            </nav>    
        
 
  )
}
