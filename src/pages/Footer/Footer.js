import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Youtube, Twitter, TelephoneFill, EnvelopeFill, GeoAltFill } from 'react-bootstrap-icons';
import { Link as Navlink } from "react-router-dom";

const Footer = () => {
  const style={
    color:"white",
    textDecoration:"none",
    display:"block"
  };
    return (
        <footer style={{backgroundColor:"#007BA7",padding:"20px"}}>
          <Container>
            <Row>
              <Col sm={3}>
                <div className="my-4" >
                    <div className="mb-4">
                      <Facebook className="me-4" color="white" size={24}/> 
                      <Youtube className="me-4" color="white" size={24}/>
                      <Twitter className="me-4" color="white" size={24}/>
                    </div> 
                    <p className="text-light"><TelephoneFill className="me-4" color="white" size={24}/> 34908834345</p>
                    <p className="text-light"><EnvelopeFill className="me-4" color="white" size={24}/> medicalcare@gmail.com</p>
                    <p className="text-light"><GeoAltFill className="me-4" color="white" size={24}/> Sherpur Town, Sherpur.</p>
                  </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                      <h3 className="text-light">Popular Medical Care</h3>
                      <div>
                          <Navlink style={style} to="/">Privecy policy</Navlink>
                          <Navlink style={style} to="/">Who We Are</Navlink>
                          <Navlink style={style} to="/">Terms of use</Navlink>
                      </div>
                    </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                        <h3 className="text-light">Most Popular Services</h3>
                        <Navlink style={style} to="/">Eye Care</Navlink>
                        <Navlink style={style} to="/">Medical Checkup</Navlink>
                        <Navlink style={style} to="/">Dental Care</Navlink>
                        <Navlink style={style} to="/">Vaccination</Navlink>
                    </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                      <h3 className="text-light">Others</h3>
                      <Navlink style={style} to="/">Study</Navlink>
                      <Navlink style={style} to="/">Skills</Navlink>
                      <Navlink style={style} to="/">Books Store</Navlink>
                    </div>
              </Col>
            </Row>
            <p className="text-center text-white">Copyright © 2020-2021 All Right Reserved.</p>
          </Container>
        </footer>
    );
};

export default Footer;