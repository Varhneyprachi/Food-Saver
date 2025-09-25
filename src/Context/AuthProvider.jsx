import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sing in with Google
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            
        });
        return () => {
            unSubscribe();
        };
    },[])

    // Update a user's profile
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    // Login User
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sing Out
    const handleSingOut = () => {
        signOut(auth)
        .then(() => {
            toast.success('Log Out Successful!')
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }

    const userInfo = {
        createUser,
        googleSingIn,
        updateUser,
        logInUser,
        user,
        setUser,
        loading,
        setLoading,
        handleSingOut,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;