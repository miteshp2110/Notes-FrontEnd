import React,{createContext,useState} from "react";

const AuthContext= createContext();

export const AuthProvider= ({children}) => {
    const[loginState,setLoginState] = useState(()=>{
        
        if (localStorage.getItem('loginState') != false){
            return localStorage.getItem('loginState')
        }
        return false
    })
    const [username,setAuthUsername] = useState(()=>{
        return localStorage.getItem('username') || ''
    })
    const [email,setAuthEmail] = useState(()=>{
        return localStorage.getItem('email') || ''
    })
    const [token,setAuthToken] = useState(()=>{
        return localStorage.getItem('token') || ''
    })

    const logout = () =>{
        localStorage.removeItem('loginState')
        setLoginState(false)
        localStorage.removeItem('email')
        setAuthEmail('')
        localStorage.removeItem('token')
        setAuthToken('')
        localStorage.removeItem('username')
        setAuthUsername('')
    }

    return (
        <AuthContext.Provider value={{
            loginState,setLoginState,username,setAuthUsername,email,setAuthEmail,token,setAuthToken,logout
        }}
        >
            {children}

        </AuthContext.Provider>
    )
}

export default AuthContext