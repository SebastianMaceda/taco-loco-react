import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
`

export const Logo = styled.h1`
    margin: auto;
    flex: 1;
    font-family: var(--ChewyFont);
    font-size: 42px;
    background: -webkit-linear-gradient( yellow, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    -webkit-text-stroke: .1px #000;
    text-decoration: none;
    font-family: 'Chewy', cursive;
    text-align: left;
    @media screen and (max-width: 450px){
        flex: 2;
        -webkit-text-stroke: .2px #000;
    }
`

export const Header = styled.h3`
`

export const SiteMap = styled.div`
`

export const SiteMapListItem = styled.li`
`

export const SiteMapLink = styled(Link)`
`

export const LocationDetails = styled.div`
`
export const LocationDetailsText = styled.h1`
`

export const OpenHoursDetails = styled.div`
`

export const world = styled.br`
`