import React from 'react';
import { Container } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import Rating from 'react-rating';

const Review = ({review}) => {
    const {name,rating,image,customerReview}=review;
    
    return (
        <div>
            <Container className="text-center border my-4 border-2 rounded-3">
               <div>
                <img src={image} alt="" style={{borderRadius:"100%"}} width="100%" />
            </div>
            <h4>{name}</h4>
            <p><Rating 
                initialRating={rating}
                placeholderSymbol={<StarFill color="goldenrod"/>} 
                fullSymbol={<StarFill color="goldenrod"/>}
                emptySymbol={<StarFill color="goldenrod"/>}/>
            </p>
            <p>{customerReview}</p> 
            </Container> 
        </div>
    );
};

export default Review;