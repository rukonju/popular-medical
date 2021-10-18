import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{id, title, details, image}=service;
    
    return (
        <div>
            <Row>
                <Col>
                    <img style={{borderRadius:'100px'}} src={image} alt="" width="250" height="250"/>
                </Col>
                <Col sm>
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <Link to={`/ditails/${id}`}>ditails</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Service;