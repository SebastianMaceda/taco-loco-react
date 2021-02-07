import styled from 'styled-components'
import { FaQuoteLeft } from 'react-icons/fa'


export const ReviewSection = styled.section`
    min-height: 50vh;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39': '#CCC5B9')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    /* overflow: hidden; */
`

export const Header = styled.h2`
    font-family: 'Lato', sans-serif;
    color: ${({darkHeader}) => (darkHeader ? '#252422' : '#f5f5f5')};
`
export const Glider = styled.div`
    margin: auto;
`

export const GlideTrack = styled.div`
    margin: auto;
`

export const FaIcon = styled(FaQuoteLeft)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60%;
    margin: auto;
    color: rgba(0, 0, 0, .02);
    z-index: 999;
    font-size: 20vh;
    z-index: 1;
    overflow: hidden;
`

export const GlideSlides = styled.ul`
    text-align: center;
    z-index: 2;
`

export const GlideSlide = styled.li`
    overflow: hidden;
`

export const Review = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`

export const ReviewLocation = styled.div`
`

export const Reviewer = styled.h5`
`

export const ReviewOrigin = styled.h6`
`

export const GlideArrows = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GlideArrow = styled.button`
    height: 50px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 0;
    left: 0;
`