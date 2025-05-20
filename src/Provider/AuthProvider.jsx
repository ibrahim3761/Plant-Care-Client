import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }


    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authData = {
        user,
        googleLogin,
        logOut,
    }

    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;