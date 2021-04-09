import React from 'react'
import { auth, provider } from '../firebase'
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import routes from '../common/constants';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    let history = useHistory();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(res => {
            console.log('Response after signup', res);
            history.push(routes.LOGIN);
        })
    }

    function signIn(email, password) {
        console.log('Inside sign in method');
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                history.push(routes.DASHBOARD);
                // ...
            })
            .catch((error) => {
                console.log('Error while logging in');
            });
    }

    function googleSignIn() {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log('google login success', result);
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                history.push(routes.DASHBOARD);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        signIn,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

