import styled from "styled-components";

export const Container = styled.section`
    background-color: #ccc5b9;
    max-width: 100%;
    padding: 20px 10%;
    display: grid;
    grid-template-columns: repeat(3, auto); 
    grid-template-areas:
    'main main kids'
    'drinks drinks extras'
    ;
    grid-gap: 10px 20px;
    & .mainMenu{
        grid-area: main;
    }
    & .kidsMenu{
        grid-area: kids;
    }
    & .drinksMenu {
        grid-area: drinks;
    }
    & .extrasMenu {
        grid-area: extras;
    }
`

export const Menu = styled.div`
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : 'none')};
    padding: 20px;
    z-index: 1;
    max-width: 100%;
`

export const Header = styled.h2`
    color: ${({darkHeader}) => (darkHeader ? '#252422' : '#dedede')};
    width: 100%;
    border-bottom: ${({darkHeader}) => (darkHeader ? '#252422' : '#dedede')} 3px solid;
    padding: 5px 0;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
`

export const MenuContainer = styled.ul`
    display: grid;
    grid-template-columns: ${({oneGrid}) => (oneGrid ? 'auto' : 'auto auto')};
    grid-gap: 10px 50px;
`

export const MenuItem = styled.li`
    list-style: none;
    display: grid;
    grid-template-areas: 
    'type type type price'
    'desc desc desc price';
    min-height: 20px;
    padding: 10px 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: ${({darkText}) => (darkText ? '#252422' : '#dedede')};
`

export const FoodType = styled.h3`
    grid-area: type;
    padding-bottom: 5px;
    text-transform: capitalize;
`

export const FoodDesc = styled.p`
    grid-area: desc;
    width: 25ch;
    /* display: none; */
`

export const FoodPrice = styled.p`
    grid-area: price;
    margin: auto;
    margin-top: 5px;
    margin-right: 0;
    font-weight: 600;
    font-size: 14px;
    font-style: italic;
    text-align: right;
`