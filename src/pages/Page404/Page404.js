import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className="text-center">
            <div>
                <img src='https://i.ibb.co/9nBbtBr/png-20211020-232623-0000.png' alt="" width="100%" />
            </div>
            <div className="mb-4">
            <Link  to="/home">
                <Button variant="outline-danger">Back to Home</Button>
            </Link>
            </div>
        </div>
    );
};

export default Page404;