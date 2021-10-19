
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Check2Circle } from 'react-bootstrap-icons';
import useServices from '../../hooks/useServices';
import banner from'../../images/banner-bg.png'
import bannerImage from '../../images/banner-image.png'
import doctors from '../../images/why-choose-img.jpg'
import FAQ from '../FAQ/FAQ';
import ServiceHome from '../ServiceHome/ServiceHome';
import './Home.css'


const Home = () => {
    
    const {services}=useServices();
    return (
        <div>
            {/* this is banner */}
            <div style={{backgroundImage:`url(${banner})`}} className='headers'>
                <h1  className="">Welcome to <br /> <span>Popular Medical Center</span></h1>
                <div>
                    <img src={bannerImage} alt="" width="100%" />
                </div>
            </div>
            {/* servises */}
            <h1 style={{borderBottom:"4px solid blue"}} className="text-center mx-auto my-4"><h1>Our services</h1></h1>
            <Container className='serv-home py-2'>
            <Row xs={1} md={3} style={{justifyContent:"center", alignItems:"center"}}>
                {
                services.map(service=><ServiceHome key={service.id} service={service}></ServiceHome>)
                }
            </Row>
            </Container>

            {/* Why choose section */}
                <h1 className="text-center my-4 text-info">Why you choose us</h1>
            <Container >
                <Row xs={2} md={1} style={{justifyContent:'center'}}>
                    <Col sx={12} md={4}>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> Professional services</h3>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> 24 Hours service</h3>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> Qualified medical facilities</h3>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> Top level doctors</h3>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> Dedicated patient care</h3>
                        <h3> <span><Check2Circle style={{color:'blue'}}/> </span> Medical Counseling</h3>
                    </Col>
                    
                </Row>
            </Container>
            <Container className="text-center">
                <img src={doctors} alt="" width="100%" />
            </Container>
            {/* FAQ section */}
            <div>
             <div style={{paddingBottom:"100px"}} className="text-center bg-info">
            <h3>Help & FAQ</h3>
            <h1>General Question</h1>
            <Container>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum doloremque unde possimus aut architecto nihil rerum iste ratione, repellendus a voluptatem deleniti neque rem ex voluptates, cupiditate autem quo!</p>
            </Container>
            </div>
            <Container>
                <FAQ></FAQ>
            </Container>
            </div>

            {/* Statistics section */}
            <Container className="bg-warning my-5 text-center rounded-3 py-4">
            <h1 className="text-center">Statistics</h1>
                <Row  xs={2} md={4}>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2 rounded-3 shadow">
                            <h3>Total Doctors</h3>
                            <h3>65+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2 rounded-3 shadow">
                            <h4>Satisfied Patients</h4>
                            <h3>650+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2 rounded-3 shadow">
                            <h4>Hospital Rooms</h4>
                            <h3>450+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-3 p-2 bg-light py-2 rounded-3 shadow">
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