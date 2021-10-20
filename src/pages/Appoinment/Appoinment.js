import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Appoinment.css'

const Appoinment = () => {
    
    return (
        <div>
            <Container className="rounded shadow" style={{backgroundColor:"rgb(129, 176, 238)"}}>
                <h1 className="text-center">Make Apponment</h1>
            <Form className="appoinment-form p-4">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter phone" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Choose Service</Form.Label>
                <Form.Control type="number" placeholder="Enter phone" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Choose Doctor</Form.Label>
                <Form.Control type="date" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark">Prossed to Payment </Button>
            </Form>
            </Container>
        </div>
    );
};

export default Appoinment;