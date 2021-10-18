import React from 'react';

const Service = ({service}) => {
    const{title, details, image}=service;
    return (
        <div>
            <h3>{title}</h3>
            <p>{details}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Service;