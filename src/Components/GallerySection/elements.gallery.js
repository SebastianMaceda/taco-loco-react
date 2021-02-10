import img1 from '../../images/tacoTruckSide.JPEG'
import img2 from '../../images/tacoTruckFront.jpg'
import img3 from '../../images/tacoTruckDowntown.jpg'

import styled from "styled-components";

export const Container = styled.section`
    height: 70vh;
    width: 100%;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SlideImg = styled.div`
    /* max-height: 90%; */
    max-width: 80%;
    min-height: 50vh;
    margin: auto;
    background: ${({backgroundSample}) => 
        backgroundSample === 0 && `url(${img1})` ||
        backgroundSample === 1 && `url(${img2})` ||
        backgroundSample === 2 && `url(${img3})` ||
        null
    };
    background-position: 50% 70%;
    background-size: cover;
    position: relative;

    @media screen and (max-width: 768px){
        max-width: 100%;
        height: 50vh;
    }
`