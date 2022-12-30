import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext =createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] =useState();
    const [editID,setEditID] =useState(null)

    const googleProvider = new GoogleAuthProvider();


    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth ,googleProvider)
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

    const authInfo = { user, loading ,editID,setEditID,createUser, signIn, logOut ,googleSignIn,updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;