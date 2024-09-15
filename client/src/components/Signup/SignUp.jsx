import { useState } from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

const SignUp=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("email: ",email," pass: ",password," username: ",username)
    }
    return (
        <>
            <div className='login_container'>
            

            <form onSubmit={handleSubmit} className='login_form'>

                    <input type='text' 
                    className='input_field'
                    placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)}
                    />


                    
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
                    <button className='button green_hover'>Register</button>
                    <Link to='/login' id='login_button' className='button green_hover register'>Login</Link>
                    
                    </div>

                   
            </form>
            
                

        </div>
        </>
    )
}

export default SignUp