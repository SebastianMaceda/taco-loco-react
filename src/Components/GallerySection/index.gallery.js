import React from "react";
import Slider from "react-slick";
import { GalleryData } from './data.gallery'
import { Container, SlideImg } from "./elements.gallery";
import './gallery.react-slick.css'

const GallerySection = ({darkBgc}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
      <Container darkBgc={darkBgc}>
        <Slider {...settings} className="slider">
            {GalleryData.map((index, i) => {
                return (
                    <SlideImg className="helloworld" key={index} backgroundSample={i} alt={index.alt}/>
                )
            })}
        </Slider>
      </Container>
    );
}



export default GallerySection

// style={{backgroundImage: `${index.img}`}}