import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext =createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] =useState();
    const githubProvider = new GithubAuthProvider();


    const githubLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth ,githubProvider)
    }

    const createUser = (email ,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            console.log("currentUser",currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, loading ,createUser, signIn, logOut ,githubLogin,updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;