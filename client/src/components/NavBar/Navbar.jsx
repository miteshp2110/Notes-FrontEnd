import './navbar.css'

const Navbar=()=>{
    return (
        <>
            <div className="navbar_container">
                <div className='main_text'>Notes</div>
                <div className='navbar_subcontainer'>
                    <div className='username_text'>username</div>
                    <button className='button blue_hover'>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;