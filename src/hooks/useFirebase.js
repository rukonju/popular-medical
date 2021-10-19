import { useState, useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .finally(() => { setLoading(false) });
    }
        
        const handleSignIn=(email,password)=>{
            console.log(email,password)
            setLoading(true)
                signInWithEmailAndPassword(auth, email, password)
                .then(result=>{
                    console(result.user)
                })
                .catch(error=>{
                    console.log(error?.code)
                })
                .finally(() => { setLoading(false) })
        }

        const handleSignUp = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
              .then(result => {
                const user = result.user;
                console.log(user);
               
              })
              .catch(error => {
               console.log(error)
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
        loading,
        signInWithGoogle,
        logOut,
        handleSignIn,
        handleSignUp
    }
}

export default useFirebase;