import styled from 'styled-components'
import img from '../../images/tacoTruckFront.jpg'
// import { Link } from 'react-router-dom'

export const HeroContainer = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${img});
    background-position: 70% 70%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
`

export const HeroOverlay = styled.div`
    display: block;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .9);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeroTextContainer = styled.div`
    position: absolute;
    transform: translateY(-40px);
`

export const HeroLogo = styled.h2`
    font-size: 72px;
    text-transform: uppercase;
    font-family: 'Chewy', sans-serif;
    color: #FD7800;
    text-align: center;
`

export const HeroSubtext = styled.p`
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-weight: 900;
    color: #FFFCF2;
    margin-top: 10px;
`

export const HeroBtnContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 20px;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    text-align: center;
    width: 90%;
`

export const HeroBtnOne = styled.div`
    margin: auto;
    width: inherit;
    background-color: #FFFCF2;
    color: #222;
    padding: 7.5px 0;
    font-size: 16px;
    border: 1px solid #222;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: 350ms;
    }

`
export const HeroBtnTwo = styled.div`
    margin: auto;
    width: inherit;
    padding: 7.5px 0;
    background-color: #222;
    color: #FFFCF2;
    font-size: 16px;
    border: 1px solid #FFFCF2;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: 350ms;
    }
`