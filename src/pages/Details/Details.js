import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const {serviceId}=useParams();
    const {services}=useServices();
    const service=services?.find(service=>service.id===serviceId);
    const {title,image,details}=service?service:{};
    console.log(serviceId)
    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
    );
};

export default Details;