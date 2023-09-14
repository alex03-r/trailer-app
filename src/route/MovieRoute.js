
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route  
  } from "react-router-dom";
import { Header } from '../components/Header';
import { Home } from '../Pages/Home';
import { MovieSelected } from '../Pages/MovieSelected';
import { Movies } from '../Pages/Movies';



export const MovieRoute = () => {

  return (
    <div style={{  marginBottom:"0px" }}>
     <Router>
          <div>
            <Header />
          </div>
          <div >         
              <Routes>
                  <Route path='/' element={ <Home />} ></Route>
                  <Route path='/movies' element={ <Movies />} ></Route>
                  <Route path='/movie/:id' element={ <MovieSelected />} ></Route>
                  <Route path='*' element={ <Home />} ></Route>
              </Routes>        
          </div>
      </Router>
    </div>
  )
}
