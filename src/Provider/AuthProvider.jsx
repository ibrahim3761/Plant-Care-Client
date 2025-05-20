import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { CgPassword } from 'react-icons/cg';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
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
        createUser,
        setUser,
        updateUser,
    }

    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;