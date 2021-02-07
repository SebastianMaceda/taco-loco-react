import styled from 'styled-components'
import { FaQuoteLeft } from 'react-icons/fa'


export const ReviewSection = styled.section`
    min-height: 50vh;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39': '#CCC5B9')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
`

export const Header = styled.h2`
    flex: 1;
    font-family: 'Lato', sans-serif;
    color: ${({darkHeader}) => (darkHeader ? '#252422' : '#f5f5f5')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
`

export const FaIcon = styled(FaQuoteLeft)`
    position: absolute;
    top: 100;
    margin: auto;
    color: rgba(0, 0, 0, .05);
    z-index: 9;
    font-size: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Slide = styled.li`
    overflow: hidden;
    margin: auto;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#322F2C' : '#CCC5B9')};
    outline: none;
`

export const Review = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    width: 40%;
    margin: auto;
    @media screen and (max-width: 980px){
        width: 50%
    }
    @media screen and (max-width: 768px){
        width: 60%
    }
    @media screen and (max-width: 650px){
        width: 80%
    }
`

export const ReviewLocation = styled.div`
    display: flex;
    margin: auto;
    width: 90%;
    margin-top: 20px;
`

export const Reviewer = styled.h5`
    flex: 1;
    line-height: 48px;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-style: italic;
`

export const ReviewOrigin = styled.h5`
    flex: 1;
    line-height: 48px;
    text-align: left;
    vertical-align: bottom;
    font-size: 16px;
    font-family: 'Lato'
`