import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        logout,
        emailLogin,
        emailRegister,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;