
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Check2Circle, Star, StarFill } from 'react-bootstrap-icons';
import useServices from '../../hooks/useServices';
import banner from'../../images/banner-bg.png'
import bannerImage from '../../images/banner-image.png'
import doctors from '../../images/why-choose-img.jpg'
import FAQ from '../FAQ/FAQ';
import useReview from '../../hooks/userReview';
import ServiceHome from '../ServiceHome/ServiceHome';
import './Home.css'
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating'


const Home = () => {
    
    const {services}=useServices();
    const{reviews}=useReview()
    return (
        <div>
            {/* this is banner */}
            <div style={{backgroundImage:`url(${banner})`}} className='headers'>
                <div data-aos="fade-up" data-aos-duration="2000">
                <h1 className="">Welcome to <br /> <span>Popular Medical Center</span></h1><br />
                <Button size="lg">Call for more info</Button>
                </div>
                <div>
                    <img src={bannerImage} alt="" width="100%" />
                </div>
            </div>
            {/* servises */}
            <h1 data-aos="fade-up"data-aos-duration="2000" className="text-center mx-auto my-4">Our services</h1>
            <Container className='serv-home py-2'>
            <Row xs={1} md={3} style={{justifyContent:"center", alignItems:"center"}}>
                {
                services.map(service=><ServiceHome key={service.id} service={service}></ServiceHome>)
                }
            </Row>
            </Container>

            {/* Why choose section */}
                <h1 data-aos="fade-left"data-aos-duration="2000" className="text-center my-4 text-info">Why you choose us</h1>
            <Container >
                <Row xs={2} md={1} style={{justifyContent:'center'}}>
                    <Col xs={10} md={4}>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> Professional services</h3>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> 24 Hours service</h3>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> Qualified medical facilities</h3>
                    </Col>
                    <Col xs={10} md={4}>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> Top level doctors</h3>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> Dedicated patient care</h3>
                        <h3 data-aos="fade-right"data-aos-duration="2000" > <span><Check2Circle style={{color:'blue'}}/> </span> Medical Counseling</h3>
                    </Col>
                    
                </Row>
            </Container>
            <Container className="text-center">
                <img src={doctors} alt="" width="100%" />
            </Container>
            {/* FAQ section */}
            <div>
             <div style={{paddingBottom:"100px"}} className="text-center bg-info">
            <h3 data-aos="fade-right"data-aos-duration="2000" >Help & FAQ</h3>
            <h1 data-aos="fade-right"data-aos-duration="2000" >General Question</h1>
            <Container>
                <p data-aos="fade-right"data-aos-duration="2000">We are here to help you . Any kind of question you wants to know please call now. We are here to help you . Any kind of question you wants to know please call now.</p>
            </Container>
            </div>
            <Container>
                <FAQ  style={{marginTop:"-80px"}}></FAQ>
            </Container>
            </div>

            {/* Statistics section */}
            <Container className="bg-warning my-5 text-center rounded-3 py-4">
            <h1 className="text-center">Statistics</h1>
                <Row  xs={2} md={4}>
                    <Col>
                        <div data-aos="fade-right"data-aos-duration="2000" className="m-2 p-2 bg-light py-2 rounded-3 shadow">
                            <h3>Total Doctors</h3>
                            <h3>65+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-right"data-aos-duration="2000" className="m-2 p-2 bg-light py-2 rounded-3 shadow">
                            <h4>Satisfied Patients</h4>
                            <h3>650+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-right"data-aos-duration="2000" className="m-2 p-2 bg-light py-2 rounded-3 shadow">
                            <h4>Hospital Rooms</h4>
                            <h3>450+</h3>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos="fade-right"data-aos-duration="2000" className="m-2 p-2 bg-light py-2 rounded-3 shadow">
                            <h4>Qualified Staff</h4>
                            <h3>750+</h3>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <Container className="text-center border my-4 border-2 rounded-3">
                <div >
                    <img src={reviews[0]?.image} alt="" style={{borderRadius:"100%"}} />
                </div>
                <h4>{reviews[0]?.name}</h4>
                <Rating 
                initialRating="5"
                placeholderSymbol={<StarFill color="goldenrod"/>} 
                fullSymbol={<StarFill color="goldenrod"/>}
                emptySymbol={<Star color="goldenrod"/>}/>

                <p className="text-muted">{reviews[0]?.customerReview}</p>
                <NavLink to="/review"  style={{textDecoration:"none", fontSize:"20px"}}>View more review</NavLink>
            </Container>
        </div>
    );
};

export default Home;