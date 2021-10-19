import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/error-page.png'

const Page404 = () => {
    return (
        <div className="text-center">
            <div>
                <img src={error} alt="" width="100%" />
            </div>
            <Link to="/home">
                <Button className="ms-4" variant="outline-danger">Back to Home</Button>
            </Link>
        </div>
    );
};

export default Page404;