import { useState,useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import userLogin from '../../services/Login'
import './login.css'
import AuthContext from '../../Contexts/Authcontext'



const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const {setAuthEmail,setAuthToken,setAuthUsername,setLoginState} = useContext(AuthContext)
    const navigate= useNavigate()

    const errorElement = document.getElementById('emailError')

    const handleSubmit =async(e)=>{
        e.preventDefault();
        

        const response = await userLogin(email,password)

        

        if (response.Error){
            if(response.Response.error){
                errorElement.innerText=response.Response.error
                errorElement.style.visibility='visible'
            }
            else{
                errorElement.innerText=response.Response.message
                errorElement.style.visibility='visible'
            }
        }

        else{

            //console.log(response.Response)
            setAuthUsername(response.Response.data.username)
            localStorage.setItem('username',response.Response.data.username)
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


                        
                        <div className='email_div'>
                    
                        <input type='email'  
                        className='input_field'
                        placeholder='Enter Email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <div className='email_error'
                        id='emailError'>Error</div>
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