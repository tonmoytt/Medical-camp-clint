import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthConnect = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const Authinction = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const CreateUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Google = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    const Updateuser= (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        }) 
    }
    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Curreuser) => {
            console.log(Curreuser);
            setUser(Curreuser)
            setloading(false)
        })
        return () => unsubscribe()

    }, [])

    const authInfo = { user, loading, CreateUser, login,Updateuser, Google,logout }
    return (
        <AuthConnect.Provider value={authInfo}>
            {children}
        </AuthConnect.Provider>
    );
};

export default Authinction;