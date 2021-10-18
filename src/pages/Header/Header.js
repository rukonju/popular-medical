import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,logOut}=useFirebase();
    return (
        <div>
            <Navbar expand="lg" >
                <Container>
                    
                    <NavLink to="/home">
                    <img
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </NavLink>
                    
                    <Navbar.Brand>Medical</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto links">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/appoinment">Appoinment</NavLink>
                            <NavLink to="/doctors">Our Doctors</NavLink>
                            <NavLink to="/about">About US</NavLink>
                        </Nav>
                        <div className="nav-btn">
                            {
                                user?.email?<Button onClick={()=>logOut()}>Logout</Button>:
                                <div>
                                    <NavLink to="/login">
                                    <Button>Login</Button>
                                </NavLink>
                                <NavLink to="/sign_up">
                                    <Button>Sign Up</Button>
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