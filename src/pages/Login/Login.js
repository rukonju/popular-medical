import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {

    const {user,handleSignIn,signInWithGoogle}=useFirebase();
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data =>{
        const {email,password}=data;
        handleSignIn(email,password)   
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Enter name" {...register("email",{ required: true })} required /> <br />
                <input type="password" placeholder="Enter password" {...register("password",{ required: true })} required /><br />
                <input type="submit" value="Login" />
            </form>
            <button onClick={()=>signInWithGoogle()}>sign in with google</button>
        </div>
    );
};

export default Login;