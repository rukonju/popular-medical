import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../Service/Service';

const Services = () => {
    const {services}=useServices();
    console.log(services)
    return (
        <div>
            {
                services?.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;