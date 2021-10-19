import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import svg from '../../images/signup.svg'

const SignUp = () => {
   
    const {user,handleSignUp}=useAuth()
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const {email,password}=data;
        handleSignUp(email,password)   
    };
    
    return (
        <div style={{backgroundColor:"blueviolet"}}>
            <Container>
            <Row className="login">
                <Col sm={6}>
                    <img src={svg} alt="" />
                </Col>
                <Col className="border bg-light p-3 rounded shadow" sm={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-center">Register</h1>
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
                        <Button variant="primary" type="submit">Register</Button>
                    </Form>
                    <div>
                        <span>Already have a account?</span>
                        <NavLink to="/login"> Login</NavLink>
                    </div>
                </Col>
            </Row>
            
        </Container>
        </div>
    );
};

export default SignUp;