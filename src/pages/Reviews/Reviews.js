import React from 'react';
import useReview from '../../hooks/userReview';
import Review from '../Review/Review';

const Reviews = () => {
    const {reviews}=useReview();
    console.log(reviews)

    return (
        <div>
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;