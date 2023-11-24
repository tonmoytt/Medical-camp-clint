import { createContext, useState } from "react";

 
export const AuthConnect =createContext()
const Authinction = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setloading]=useState(true)
    
    const authInfo={user}
    return (
         <AuthConnect.Provider value={authInfo}>
            {children}
         </AuthConnect.Provider>
    );
};

export default Authinction;