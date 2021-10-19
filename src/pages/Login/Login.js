import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImage from '../../images/login.jpg'
import './Login.css'

const Login = () => {

    const {user,handleSignIn,signInWithGoogle}=useAuth();
    const { register, handleSubmit } = useForm();
    const history=useHistory();
    const location=useLocation();
    const ridirect_url=location.state?.from || "/home";
    const onSubmit = data =>{
        const {email,password}=data;
        console.log(data)
        handleSignIn(email,password)   
    };

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(retult=>{
            history.push(ridirect_url)
        })
    }
    
    return (
        <Container>
            <Row className="login">
                <Col c sm={6}>
                    <img src={loginImage} alt="" width="100%" />
                </Col>
                <Col className="border p-3 rounded shadow" xs={12} sm={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-center">Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email",{ required: true })} required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password",{ required: true })} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                    </Form>
                    <Button onClick={handleGoogleSignIn}>sign in with google</Button>
                    <div>
                        <span>Don't hane an account?</span>
                        <NavLink to="/sign_up">
                            <span>Register Now</span>
                        </NavLink>
                    </div>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Login;