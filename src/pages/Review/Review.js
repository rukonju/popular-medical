import React from 'react';

const Review = ({review}) => {
    const {name,rating,image,customerReview}=review;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{rating}</p>
            <p>{customerReview}</p>

        </div>
    );
};

export default Review;