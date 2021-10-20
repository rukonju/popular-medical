import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const [isScroll, setIsScroll]=useState(false);
    const {user,logOut,userName}=useAuth();
    const handleScrolling=()=>{
        if(window.scrollY>=450){
            setIsScroll(true)
        }
        else{
            setIsScroll(false)
        }
    }
    window.addEventListener('scroll',handleScrolling);
    return (
        <div className={!isScroll?"bg-light":"fixed-top bg-light"}>
            <Navbar expand="lg" >
                <Container>
                    <NavLink style={{textDecoration:"none"}} to="/home">
                    <img
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand className="ms-1">Popular Medical</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto links">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/appoinment">Appoinment</NavLink>
                            <NavLink to="/review">Review</NavLink>
                            <NavLink to="/about">About US</NavLink>
                        </Nav>
                        <div className="nav-btn">
                            {
                                user?.email?<div> <img src={user?.photoURL} alt="" width="50px" style={{borderRadius:"50px"}} /> <span className="me-1">{user?.displayName?user?.displayName:userName}</span><Button variant="outline-primary" onClick={()=>logOut()}>Logout</Button></div>:
                                <div>
                                <NavLink to="/login">
                                    <Button>Login</Button>
                                </NavLink>
                                <NavLink to="/sign_up">
                                    <Button variant="outline-primary">Sign Up</Button>
                                </NavLink>
                                </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;