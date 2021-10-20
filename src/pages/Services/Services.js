import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../../Service/Service';
import aboutBanner from '../../images/about.png';
const Services = () => {
    const {services}=useServices();
    return (
        <div>
            <div style={{backgroundImage:`url(${aboutBanner})`}} className="mb-5 text-center">
                <div className="text-light about py-5" >
                <h1 className="pt-5">We Care About Your Health</h1>
                <p>Take care of your health with us</p>
                <p className="pb-5">Call for Appointment</p>
                </div>
            </div>
            <h1 className=" text-center my-5">Choose your service</h1>
            <h4 className=" text-center mb-5">Simply make a appoinment to get service</h4>
            <Container>
            <Row xs={1} md={2}>
                {
                    services?.map(service=><Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Services;