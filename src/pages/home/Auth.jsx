import { createContext,  useState } from "react";
export const AuthContext= createContext()
export const AuthProvider = ({children}) => {
    const[user,setUser]= useState(null)
    const login=(user) => {
     setUser(user)
    }
    const logout=() => {
        setUser(null)
    }
    AuthProvider.displayName='Login'
    return (
        <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>

    )
    
}
