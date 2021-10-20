import { useState, useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';


firebaseInitialize()

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [userName, setUserName] = useState({});
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
            return signInWithEmailAndPassword(auth, email, password)
            .catch(error=>{
                setError(error)
            })
            .finally(() => { setLoading(false) })
    }
    const handleSignUp = (email, password,name) => {
        return createUserWithEmailAndPassword(auth, email, password)
        
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

    // user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser([user])
            }
            else {
                setUser();
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const displayUserName=(name)=>{
            setUserName(name)
        
    }

    return {
        user,
        error,
        loading,
        userName,
        signInWithGoogle,
        logOut,
        handleSignIn,
        handleSignUp,
        displayUserName

    }
}

export default useFirebase;