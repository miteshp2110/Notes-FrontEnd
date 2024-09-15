import { useContext } from 'react';
import './navbar.css'
import AuthContext from '../../Contexts/Authcontext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar=()=>{
    const {loginState,username,logout} = useContext(AuthContext)
    const navigate = useNavigate()
    
    return (
        <>
            <div className="navbar_container">
                <div className='main_text'>Notes</div>
                <div className='navbar_subcontainer'>
                    <div className='username_text'>
                        {loginState?username:''}
                    </div>
                    {
                        loginState?<button className='button blue_hover' onClick={()=>{
                            console.log("logout")
                            logout()
                            navigate('/')
                        }}>Logout</button>
                        :<Link to='/login' className='button green_hover'>Login</Link>
                        
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Navbar;