import React from "react";
import Slider from "react-slick";
import './react-slick.css'
import { ReviewSection, Header, Slide, Review, ReviewLocation, Reviewer, FaIcon } from './elements.reviews'
import { ReviewsData } from './data.reviews'




const Reviews = ({header, darkBgc, darkHeader, darkText}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <ReviewSection darkBgc={darkBgc}>
        <Header darkHeader={darkHeader}>{header}</Header>
        <FaIcon />
        <Slider {...settings} className="slider">
        {ReviewsData.map( index => {
            return (
                <Slide key={index} darkText={darkText}>
                    <Review>{index.reviewText}</Review>
                    <Reviewer>{index.reviewer} </Reviewer>
                </Slide>
            )
        })}
        </Slider>
      </ReviewSection>
    );
}

export default Reviews