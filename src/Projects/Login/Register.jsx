import { useState } from "react"
import { Link } from "react-router-dom"


export function Register(){

    const [inputsValues, setinputsValues] = useState({name:"", email:"", password:"", consfirmPassword:"" })

    function onInputsValuesChange(e){

        setinputsValues({
            ...inputsValues,
            [e.target.name] : e.target.value
        })
    }

    const{   name , email, password, confirmpassword } = inputsValues;

    function onRegister(){

        if (password !== confirmpassword ) {

            alert('The passwords are not the same')
            return 
        }

        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'},
            body: JSON.stringify(inputsValues)
          } 

             fetch('http://localhost:4000/api/auth/register' , payload  )
                .then(res => res.json())
                    .then(data => console.log(data) )        
                        .catch(error => console.log(error))

    }

    return(
        <div className="container  login" >
            <div  className='inputs border rounded'>
                    <h1 className='text-center mt-3'>Register</h1>
                    <label  className='ms-1 form-label'> Name</label>
                    <input  type="text" name="name" value={name} onChange={onInputsValuesChange}   className='form-control'/>
                    <label className='ms-1 form-label'> Email</label>
                    <input type="text"  name="email" value={email} onChange={onInputsValuesChange}  className='form-control' />
                    <label className='ms-1 form-label'> Password</label>
                    <input type="text"  name="password" value={password} onChange={onInputsValuesChange}  className='form-control' />
                    <label className='ms-1 form-label'> Confirm Password</label>
                    <input type="text"  name="confirmpassword" value={confirmpassword} onChange={onInputsValuesChange}  className='form-control' />
                    <button className='btn mt-4 btn-primary' onClick={ onRegister }> Register </button>      
                    <label className='text-center mt-2'> <Link to="/" > Already in? </Link> </label>                    
            </div>
        </div>   

    )
}