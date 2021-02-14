import styled from 'styled-components'
import img from '../../images/tacoTruckFront.jpg'
// import { Link } from 'react-router-dom'

export const HeroContainer = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
`

export const HeroOverlay = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HeroTextContainer = styled.div`
    position: absolute;
    transform: translateY(-40px);
    flex: 9;
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
    display: ${({show}) => (show ? 'grid' : 'none')};
    grid-template-columns: auto auto;
    margin-top: 20px;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    text-align: center;
    position: relative;
    transform: translateX(20px);
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

export const BottomTextContainer = styled.div`
    min-height: 10vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    top: 90%;
    bottom: 0;
    padding-bottom: 20px;

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`
export const BottomText = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 40px;
    align-items: center;
    flex-direction: ${({helloWorld}) => (helloWorld ? 'row' : 'row-reverse')};
    color: #ccc;
    @media screen and (max-width: 550px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const Icon = styled.span`
    font-size: 18px;
    padding: 0 5px;
`

export const BottomTextArea = styled.p`
    font-family: 'Lato', san-serif;
    font-size: 14px;
    font-weight: 900;
    display: flex;
`

export const SmallLine = styled.span`
    width: 20px;
    height: 1px;
    background-color: white;
    margin: auto 5px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`