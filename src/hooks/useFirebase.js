import { useState, useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';


firebaseInitialize()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState()
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .catch(error=>setError(error))
        .finally(() => { setLoading(false) });
    }
    //create user
    const handleSignIn=(email,password)=>{
            signInWithEmailAndPassword(auth, email, password)
            .then(result=>{})
            .catch(error=>{
                setError(error)
            })
            .finally(() => { setLoading(false) })
    }
    const handleSignUp = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        })
        .catch(error => {
            setError(error)
        })
        .finally(() => { setLoading(false) })   
    }    
    
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        error,
        loading,
        signInWithGoogle,
        logOut,
        handleSignIn,
        handleSignUp
    }
}

export default useFirebase;