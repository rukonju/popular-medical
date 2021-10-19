import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Globe, TelephoneFill, EnvelopeFill, GeoAlt } from 'react-bootstrap-icons';
import aboutBanner from '../../images/about.png'
const About = () => {
    return (
        <div>

            <div style={{backgroundImage:`url(${aboutBanner})`}} className="mb-5 text-center">
                <div className="text-light about py-5" >
                <h1 className="pt-5">We Care About Your Health</h1>
                <p>Take care of your health with us</p>
                <p className="pb-5">Call for Appointment</p>
                </div>
            </div>
            <Container className=" border p-4 rounded-3 bg-info text-center">
                <h1>Open: 8am.</h1>
                <h1>Close: 10pm</h1>
                <h2>Friday to Saterday</h2>
            </Container>
            <div className="bg-light mt-5">
            <Container className="p-2">
            <Row xs={1} md={4} className="text-center">
            <Col>
                <div>
                    <GeoAlt style={{color:"blueviolet"}} size="80px"></GeoAlt>
                </div>
                <h3>Address</h3>
                <p>Sherpur-Shadar, sherpur,Mymensingh,Dhaka-2100.</p>
            </Col>
            <Col>
                <div>
                    <TelephoneFill style={{color:"blueviolet"}} size="80px"></TelephoneFill>
                </div>
                <h3>Phone</h3>
                <p>094758998145</p>
            </Col>
            <Col>
                <div>
                    <EnvelopeFill style={{color:"blueviolet"}} size="80px"></EnvelopeFill>
                </div>
                <h3>Email</h3>
                <p>medicalcare@gmail.com</p>
            </Col>
            <Col>
                <div>
                    <Globe style={{color:"blueviolet"}} size="80px"></Globe>
                </div>
                <h3>Website</h3>
                <p>Sherpur-Shadar, sherpur,Mymensingh,Dhaka-2100.</p>
            </Col>
            </Row>
        </Container>
        </div>
        </div>
    );
};

export default About;