import { useState } from 'react'
import {Link} from 'react-router-dom'
import './login.css'

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("email: ",email," pass: ",password)
    }

    return (
        <>
            <div className='login_container'>
            

                <form onSubmit={handleSubmit} className='login_form'>


                        
                        <div className='email_div'>
                    
                        <input type='email'  
                        className='input_field'
                        placeholder='Enter Email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <div className='email_error'>Error</div>
                        </div>
                        <input type='password' 
                        className='input_field'
                        placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                        <div className='button_container'>
                        <button className='button green_hover'>Login</button>
                        <Link to ='/signup' id='register_button' className='button green_hover register'>Register</Link>
                        
                        </div>

                       
                </form>
                
                    

            </div>
        </>
    )
}


export default Login