import React, {useEffect} from 'react'
import { ReviewsData, ReviewElementsData } from './data.reviews'
import { ReviewSection, Header, Glider, GlideTrack, FaIcon, GlideSlides, GlideSlide, Review, ReviewLocation, Reviewer, ReviewOrigin, GlideArrows, GlideArrow} from './elements.reviews'
import Glide from '@glidejs/glide'
import './styles.reviews.scss'
const sliderConfiguration = {
    perView: 1,
    startAt: 0,
    type: 'carousel'
  };


export const Reviews = ({header, prevSlide, nextSlide, darkBgc, darkHeader}) => {


    const slider = new Glide('.glide', sliderConfiguration);

    useEffect(() => {
      return () => slider.mount()
    }, slider)
    
    return (
        <ReviewSection darkBgc={darkBgc}>
            <Header darkHeader={darkHeader}>{header}</Header>
            <Glider className="glide">
                <GlideTrack className="glide__track" data-glide-el="track">
                    <FaIcon />
                    <GlideSlides className="glide__slides">
                        {ReviewsData.map( index => {
                            return (
                                <GlideSlide key={index} className="glide__slide">
                                    <Review>{index.reviewText}</Review>
                                    <ReviewLocation>
                                        <Reviewer>{index.reviewer}</Reviewer>
                                        <ReviewOrigin>{index.reviewLocation}</ReviewOrigin>
                                    </ReviewLocation>
                                </GlideSlide>
                            )
                        })}
                    </GlideSlides>
                </GlideTrack>
                <GlideArrows className="glide__arrows" data-glide-el="controls">
                        <GlideArrow className="glide__arrow glide__arrow--left" data-glide-dir="<">{prevSlide}</GlideArrow>
                        <GlideArrow className="glide__arrow glide__arrow--right" data-glide-dir=">">{nextSlide}</GlideArrow>
                </GlideArrows>
            </Glider>
        </ReviewSection>
    )
}

export default Reviews


{/* <div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">0</li>
      <li class="glide__slide">1</li>
      <li class="glide__slide">2</li>
    </ul>
  </div>
</div> */}

{/* <div class="glide__bullets" data-glide-el="controls[nav]">
    <button class="glide__bullet" data-glide-dir="=0"></button>
    <button class="glide__bullet" data-glide-dir="=1"></button>
    <button class="glide__bullet" data-glide-dir="=2"></button>
</div> */}