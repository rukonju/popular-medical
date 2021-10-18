import React from 'react';

import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
   
    const {user,handleSignUp}=useFirebase()
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const {email,password}=data;
        handleSignUp(email,password)   
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="email" placeholder="Enter name" {...register("email",{ required: true })} required /><br />
                <input type="password" placeholder="Enter password" {...register("password",{ required: true })} required /><br />
                {/* <input type="password" placeholder="Confirm password" {...register("ConfirmPassword")} required /><br /> */}
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default SignUp;