import { useContext, useState } from 'react'
import './signup.css'
import {Link, useNavigate} from 'react-router-dom'

import userSignUp from '../../services/SignUp'
import AuthContext from '../../Contexts/Authcontext'

const SignUp=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const {setAuthEmail,setAuthToken,setAuthUsername,setLoginState} = useContext(AuthContext)
    const navigate= useNavigate()


    const errorElement = document.getElementById('emailError')

    const handleSubmit =async(e)=>{
        e.preventDefault();

        
        // console.log("email: ",email," pass: ",password," username: ",username)

        const response= await userSignUp(username,email,password)
        console.log(response)

        if (response.Error){
            errorElement.innerText=response.Response.error
            errorElement.style.visibility='visible'
        }
        else{
            setAuthUsername(username)
            localStorage.setItem('username',username)
            setAuthEmail(email)
            localStorage.setItem('email',email)
            setAuthToken(response.Response.data.token)
            localStorage.setItem('token',response.Response.data.token)
            setLoginState(true)
            localStorage.setItem('loginState',true)
            navigate('/')
        }
    }


    return (
        <>
            <div className='login_container'>
            

            <form onSubmit={handleSubmit} className='login_form'>

                    <input type='text' 
                    className='input_field'
                    placeholder='Username'
                    onChange={(e)=>setUsername(e.target.value)}
                    required maxLength='10'
                    />


                    
                    <div className='email_div'>
                
                    <input type='email'  
                    className='input_field'
                    placeholder='Enter Email'
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <div className='email_error' id='emailError'>Error</div>
                    </div>
                    <input type='password' 
                    className='input_field'
                    placeholder='Password'
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    minLength='8'
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