
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Details = () => {
    const {serviceId}=useParams();
    const {services}=useServices();
    const service=services?.find(service=>service.id===serviceId);
    const {title,image,details}=service?service:{};
    console.log(serviceId)
    return (
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
    );
};

export default Details;