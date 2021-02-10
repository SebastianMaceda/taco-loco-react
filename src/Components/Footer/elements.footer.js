import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Footer = styled.footer`
    width: 100%;
    background-color: #252422;
`

export const Container = styled.section`
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 50px 10%;
    background-color: #252422;
    @media screen and (max-width: 1000px){
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 850px){
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 550px){
        grid-template-columns: auto;
    }
`

export const Logo = styled.h1`
    margin: auto;
    margin-top: 0;
    margin-left: 0;
    flex: 1;
    font-family: var(--ChewyFont);
    font-size: 42px;
    background: -webkit-linear-gradient( yellow, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    -webkit-text-stroke: 1px rgba(0, 0, 0, .7);
    text-decoration: none;
    font-family: 'Chewy', cursive;
    text-align: left;
    @media screen and (max-width: 850px){
        padding-top: 5px;
    }
    @media screen and (max-width: 450px){
        flex: 2;
        -webkit-text-stroke: .2px #000;
    }
`

export const Header = styled.h3`
    color: #F5F5F5;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
`

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    @media screen and (max-width: 850px){
        /* padding-top: 10px; */
        padding-top: ${({paddingTop}) => (paddingTop ? '50px': '0')};
        justify-content: center;
        align-items: left;
    }
`

export const SiteMapListItem = styled.li`
    list-style: none;
`

export const SiteMapLink = styled(Link)`
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #c2c2c2;
    text-decoration: none;
    flex: 1;
    padding: 5px 0;

    &:hover{
        text-decoration: underline;
    }
`

export const LocationDetailsText = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #c2c2c2;
    line-height: 27px;
    font-weight: 500;
    padding: 5px 0;
`

export const HourDate = styled.h5`
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({textBold}) => (textBold ? '600': '500')};
    font-size: 18px;
    color: ${({darkText}) => (darkText ? '#c2c2c2': '#dedede')};
    padding: 5px 0 0 0;
`

export const BottomContainer = styled.section`
    background-color: #403D39;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const CopyText = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    font-size: 14px;
    font-family: 'Oswald', sans-serif;
`

export const Credit = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    font-family: 'Oswald', sans-serif;
    grid-column-gap: 5px;
`

export const Text = styled.h2`
    margin: auto;
    margin-right: ${({marginRight}) => (marginRight ? '0' : 'auto')};
    text-align: ${({alignRight}) => (alignRight ? 'right' : 'center')};
    flex: 1;
    color: #b8b2a8;
    font-weight: 300;

`
export const TextLink = styled.a`
    flex: 1;
    text-align: left;
    margin: auto;
    margin-left: 0;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Oswald', san-serif;
    color: #fff;
`