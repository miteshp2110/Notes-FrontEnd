import React,{createContext,useState} from "react";

const AuthContext= createContext();

export const AuthProvider= ({children}) => {
    const[loginState,setLoginState] = useState(true)
    const [username,setUsername] = useState('asd')
    const [email,setEmail] = useState('')
    const [token,setToken] = useState('')

    return (
        <AuthContext.Provider value={{
            loginState,setLoginState,username,setUsername,email,setEmail,token,setToken
        }}
        >
            {children}

        </AuthContext.Provider>
    )
}

export default AuthContext