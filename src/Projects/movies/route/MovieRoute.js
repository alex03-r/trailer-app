
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { Home } from '../Pages/Home';
import { MovieSelected } from '../Pages/MovieSelected';



export const MovieRoute = () => {

  return (
    <div style={{ height:"100vh" }} >
     <Router>
        <div>
          <NavBar />
        </div>
        <div style={{backgroundColor:"#eeeeee"}} >         
                <Routes>
                    <Route path='/' element={ <Home />} ></Route>
                    <Route path='/movie/:id' element={ <MovieSelected />} ></Route>
                </Routes>        
        </div>
        </Router>
    </div>
  )
}
