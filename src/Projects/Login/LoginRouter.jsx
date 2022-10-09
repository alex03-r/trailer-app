import React from "react";
import {
    BrowserRouter ,
    Routes,
    Route
  } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { Dasboard } from "./Dasboard";


 export function LoginRouter(){


    return (
       <BrowserRouter>

          <div>

             <Routes>

                 <Route path="/" element={ <Login /> }>  </Route>

                 <Route path="/register" element={ <Register />}> </Route>
                 <Route path="/dasboard" element={<Dasboard />} ></Route>

           </Routes>


          </div>
       </BrowserRouter>
    )



}