/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const getSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        getSignUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;