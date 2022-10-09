
import './style.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

 export function Login(){


    const [inputsChange , setInputsChange ] = useState({
                email:"",
                password:"" 
    })
    
    const { email, password } = inputsChange;

    function onInputsChange(e){

        setInputsChange({
            ...inputsChange,
            [e.target.name]:e.target.value
        })

      }

      function onLogin(){

        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'},
            body: JSON.stringify(inputsChange)
          } 
             fetch('http://localhost:4000/api/auth/login' , payload  )
                .then(res => res.json())
                    .then(data => console.log(data) )        
                        .catch(error => console.log(error))
      }

    return(
        <div className="container  login " >
            <div  className='inputs border rounded'>
                <h1 className='text-center mt-3'>Login</h1>
                <label  className='ms-1 form-label'> Username</label>
                <input  type="text" name='email' value={email}  onChange={ onInputsChange } className='form-control'/>
                <label className='ms-1 form-label'> Password</label>
                <input type="text" name='password' value={password}  onChange={ onInputsChange }  className='form-control' />
                <button className='btn mt-4 btn-primary' onClick={ onLogin }>Sing in</button>      
                <label className='text-center mt-2'> <Link to="/register" > Register </Link> </label>                    
           </div>
        </div>    

    )
}