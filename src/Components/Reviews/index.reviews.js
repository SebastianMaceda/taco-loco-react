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
        <Slider {...settings}>
        {ReviewsData.map( index => {
            return (
                <Slide key={index} darkText={darkText}>
                    <Review>{index.reviewText}</Review>
                    <ReviewLocation>
                        <Reviewer>{index.reviewer} </Reviewer>
                    </ReviewLocation>
                </Slide>
            )
        })}
        </Slider>
      </ReviewSection>
    );
}

export default Reviews