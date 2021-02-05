import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const TopNavbar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFFCF2;
    padding: 10px 40px;
    z-index: 999;
    width: 100%;
    position: fixed;
    @media screen and (max-width: 400px) {
        padding: 10px;
    }
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
export const NavbarContainer = styled.nav`
    position: fixed;
    height: 100%;
    width: 50%;
    background-color: #FFFCF2;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    transition: 500ms ease-in-out;

    &.active{
        transition: 500ms ease-in-out;
        left: 50%;
    }
    @media screen and (max-width: 768px){
        &.active{
            width: 100%;
            left: 0;
        }
    }
`
export const NavbarMenu = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    margin: auto;
    height: 100%;
`
export const CloseMenuBars = styled(Link)`
    color: #222;
    font-size: 36px;
    margin-right: 0;
    text-align: right;
    padding: 10px 40px;
    right: 0;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavList = styled.li`
    flex: 1;
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const NavLink = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color: #222;
    text-decoration: none;
    position: relative;
    z-index: 1;
    padding: 10px 40px;
    &:before{
        content: '';
        position: absolute;
        background-color: #222;
        color: #FFFCF2;
        z-index: -1;
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 300ms ease-in-out;
        min-height: 100%;
        min-width: 100%;
    }
    &:hover:before, &:focus:before{
        transform: scaleY(1);
        color: #FFFCF2;
    }
    &:hover, &:focus{
        color: #FFFCF2;
    }
`
export const MenuBars = styled(Link)`

    flex: 1;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 0;
    font-size: 36px;
    color: #222;
`