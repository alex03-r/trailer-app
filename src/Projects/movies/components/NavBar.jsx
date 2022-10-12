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
 
            <nav className="navbar fixed-top navbar-expand-lg ps-sm-2 ps-lg-5 navbar-light bg-light mb-0 pb-0" style={{ height:"60px" }}>
           
                <div className="container-lg  ms-xl-4 ps-xl-3 w-100 " style={{ marginTop:"0px", paddingTop:"0px" }} >
                   <Link className=''  to="/" > <img  style={{width:"50px"}} src={logoPeli} /> </Link>
                    <div className='d-flex me-sm-5 me-lg-4 mt-xl-1  ' >
                     <ul className='d-flex me-4 mt-2' >
                            <Link to='/' className='me-2 mt-lg-1' style={{color:"black", textDecoration:"none"}} >
                                <p>Home</p>
                            </Link>
                     </ul>
                      <input class="form-control h-25 mt-sm-1 mt-lg-2 me-1" style={{position:"relative"}} value={searchText} type="search " onChange={(e) => setSearchText(e.target.value) } placeholder="Search movie" aria-label="Search" />

                      <div className=''  style={{position:"absolute" , top:"48px", width:"200px", right:"auto", cursor:"pointer"  }} >  
                      {
                        searchText.length > 0 &&   <SearchMovieList searchText={searchText}  setSearchText={setSearchText} />
                      }
                      </div> 
                    </div>
                    
                </div>
            </nav>    
        
 
  )
}
