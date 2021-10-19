
import React from 'react';
import { Accordion, Button,Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import banner from'../../images/banner-bg.png'
import bannerImage from '../../images/banner-image.png'
import doctors from '../../images/why-choose-img.jpg'
import './Home.css'


const Home = () => {
    const {services}=useServices();
    return (
        <div>
            <div style={{backgroundImage:`url(${banner})`}} className='headers'>
                <h1  className="">Welcome to <br /> <span>Popular Medical Center</span></h1>
                <div>
                    <img src={bannerImage} alt="" width="100%" />
                </div>
            </div>
            <h1 className="text-center my-4">Our services</h1>
            <Container className='serv-home py-2'>
            <Row xs={1} md={3} style={{justifyContent:"center", alignItems:"center"}}>
            {
                services.map(service=>
                    <Col key={service.id} xs={10} sm={2}>
                    <div className=" service text-center my-4">
                        <img style={{borderRadius:'100%'}} src={service?.image} alt="" width="80%" />
                        <h3>{service?.title}</h3>
                        <Link style={{textDecoration:"none"}} to={`/ditails/${service?.id}`}>
                        <div className="d-grid">
                            <Button variant="outline-dark">
                                <h5>Ditails</h5>
                            </Button>
                        </div>
                        </Link>
                    </div>
                    </Col>
                    
                )
            }
            </Row>
            </Container>
            <h1 className="text-center my-4">Why you choose us</h1>
            <Container>
                <h3>Medical Counseling</h3>
                <h3>Professional services</h3>
                <h3>24 Hours service</h3>
                <h3>Qualified medical facilities</h3>
                <h3>Top level doctors</h3>
                <h3>Dedicated patient care</h3>
            </Container>
            <Container className="text-center">
                <img src={doctors} alt="" width="100%" />
            </Container>
            <div>
             <div style={{paddingBottom:"100px"}} className="text-center bg-info">
            <h3>Help & FAQ</h3>
            <h1>General Question</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum doloremque unde possimus aut architecto nihil rerum iste ratione, repellendus a voluptatem deleniti neque rem ex voluptates, cupiditate autem quo!</p>
            </div>
            <Container>
            <Accordion style={{marginTop:"-80px"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can I personly meet a doctor in clinic?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to make an appoinment for medical chechup?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What payment methods are available?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I found location?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>How expensive is this clinic?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What kind of environment arount the clinic?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What technologies are used for treatment and medical checkup?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Container>
            </div>
            <h1 className="text-center mt-4">Statistics</h1>
            
            <Container className="bg-warning my-5 text-center py-4">
                <Row  xs={2} md={4}>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2">
                            <h3>Total Doctors</h3>
                            <h3>50+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2">
                            <h4>Satisfied Patients</h4>
                            <h3>650+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2">
                            <h4>Hospital Rooms</h4>
                            <h3>450+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2">
                            <h4>Qualified Staff</h4>
                            <h3>750+</h3>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Home;