
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import aboutBanner from '../../images/about.png'

const Details = () => {
    const {serviceId}=useParams();
    const {services}=useServices();
    const service=services?.find(service=>service.id===serviceId);
    const {title,image,details}=service?service:{};
    return (
        <div>
            <div style={{backgroundImage:`url(${aboutBanner})`}} className="mb-5 text-center">
                <div className="text-light about py-5" >
                <h1 className="pt-5">We Care About Your Health</h1>
                <p>Take care of your health with us</p>
                <p className="pb-5">Call for Appointment</p>
                </div>
            </div>
            <Container>
            <Row>
                <Col>
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <NavLink to="/appoinment">
                    <Button>Make Appoinment</Button>
                    </NavLink>
                </Col>
                <Col>
                    <img src={image} alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Details;