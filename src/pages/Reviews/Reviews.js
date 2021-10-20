import React from 'react';
import useReview from '../../hooks/userReview';
import Review from '../Review/Review';
import aboutBanner from '../../images/about.png'

const Reviews = () => {
    const {reviews}=useReview();
    console.log(reviews)

    return (
        <div>
            <div style={{backgroundImage:`url(${aboutBanner})`}} className="mb-5 text-center">
                <div className="text-light about py-5" >
                <h1 className="pt-5">We Care About Your Health</h1>
                <p>Take care of your health with us</p>
                <p className="pb-5">Call for Appointment</p>
                </div>
            </div>
            <h1 className="text-center">Our Customers Review</h1>
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;