import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{id, title, details, image}=service;
    
    return (
        <Col>
            <div className="m-3 bg-info">
            <Row xs={1} md={2}>
            <Col>
                <div>
                <img src={image} alt=""width="100%"/>  
                </div>
            </Col>
            <Col>
                <div className="p-2">
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <Link to={`/ditails/${id}`}>
                        <Button variant="secondary">
                            Ditails
                        </Button>
                    </Link>
                </div>
            </Col>
            </Row>
            </div>
        </Col>
    );
};

export default Service;