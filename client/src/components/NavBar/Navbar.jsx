import { useContext } from 'react';
import './navbar.css'
import AuthContext from '../../Contexts/Authcontext';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    const {loginState,username} = useContext(AuthContext)
    
    return (
        <>
            <div className="navbar_container">
                <div className='main_text'>Notes</div>
                <div className='navbar_subcontainer'>
                    <div className='username_text'>
                        {loginState?username:''}
                    </div>
                    {
                        loginState?<button className='button blue_hover'>Logout</button>
                        :<Link to='/login' className='button green_hover'>Login</Link>
                        
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Navbar;