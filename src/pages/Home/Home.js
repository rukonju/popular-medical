import React from 'react';
import useServices from '../../hooks/useServices';
import banner from'../../images/banner-bg.png'
import bannerImage from '../../images/banner-image.png'
import Service from '../../Service/Service';

import './Home.css'


const Home = () => {
    const {services}=useServices();
    return (
        <div>
            <div style={{backgroundImage:`url(${banner})`}} className='headers'>
                <h1  className="">Welcome to <br /> <span>Popular Medical Center</span></h1>
                <div>
                    <img src={bannerImage} alt="" width="100%" />
                </div>
            </div>
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }

        </div>
    );
};

export default Home;