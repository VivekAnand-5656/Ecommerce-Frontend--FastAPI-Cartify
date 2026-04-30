import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("token"));
    const [cartlength,setCartlength] = useState(0)

    const login = (jwt)=>{
        setToken(jwt)
        localStorage.setItem("token", jwt)
        setIsLoggedIn(true)
    }
    const logout = ()=>{
        setToken(null)
        setIsLoggedIn(false)
        localStorage.removeItem("token")

    }
  return ( 
    <AuthContext.Provider value={
        {
            token,isLoggedIn,login,logout,cartlength,setCartlength
        }
    } >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider