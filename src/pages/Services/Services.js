import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../../Service/Service';

const Services = () => {
    const {services}=useServices();
    console.log(services)
    return (
        <Container>
            <Row xs={1} md={2}>
                {
                    services?.map(service=><Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;