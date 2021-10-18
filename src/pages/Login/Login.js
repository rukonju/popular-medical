import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {user,handleSignIn,signInWithGoogle}=useAuth();
    const { register, handleSubmit } = useForm();
    const history=useHistory();
    const location=useLocation();
    const ridirect_url=location.state?.form|| '/home';
    
    const onSubmit = data =>{
        const {email,password}=data;
        handleSignIn(email,password)   
    };

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(retult=>{
            console.log('hello')
            history.push(ridirect_url)
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Enter name" {...register("email",{ required: true })} required /> <br />
                <input type="password" placeholder="Enter password" {...register("password",{ required: true })} required /><br />
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleGoogleSignIn}>sign in with google</button>
        </div>
    );
};

export default Login;