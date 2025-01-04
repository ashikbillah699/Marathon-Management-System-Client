/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const getSignUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const getLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const getLogOut = () =>{
        setLoading(true);
        signOut(auth)
    }

    const profileUpdate = ({displayName, photoURL}) =>{
        return updateProfile(auth.currentUser,{
            displayName,
            photoURL
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        getSignUp,
        getLogin,
        googleSignUp,
        getLogOut,
        user,
        loading,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;