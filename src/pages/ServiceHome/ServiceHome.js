import React from 'react';
import { Button, Card, Col, Container, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceHome.css'

const ServiceHome = ({service}) => {
    if(service==={}){
        return (
            <Container>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Container>
        )
    }
    return (
        <Col  xs={10} sm={2}>
            <div className=" service text-center my-4">
                <div className="items py-3">
                    <img style={{borderRadius:'100%'}} src={service?.image} alt="" width="80%" />
                    <h3>{service?.title}</h3>
                    <p>{service.subtitle}</p>
                </div>
                <Link style={{textDecoration:"none"}} to={`/ditails/${service?.id}`}>
                <div className="d-grid">
                    <Button variant="outline-info">
                        <h5>Ditails</h5>
                    </Button>
                </div>
                </Link>
            </div>
        </Col>            

    );
};

export default ServiceHome;