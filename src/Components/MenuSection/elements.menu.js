import styled from "styled-components";

export const MenuSectionContainer = styled.section`
    background-color: #ccc5b9;
    width: 100%;
    padding: 100px 0 150px 0;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`
export const Container = styled.div`
    margin: auto;
    max-width: 1100px;
    display: grid;
    grid-template-areas:
    'main main kids'
    'drinks drinks extras'
    ;
    grid-template-columns: auto auto;
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

    @media screen and (max-width: 1150px){
        max-width: 850px;
        grid-template-areas: 
        'main main'
        'kids drinks'
        'extras extras';
    }
    @media screen and (max-width: 786px){
        width: 90%;
        grid-template-columns: auto;
        grid-template-areas: 
        'main'
        'kids'
        'drinks'
        'extras';
    }
    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const Menu = styled.div`
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : 'none')};
    padding: 20px;
    z-index: 1;
    /* max-width: 100%; */

    @media screen and (max-width: 1150px){
        & .drinksMenuMobile {
            grid-template-columns: auto;
        }
    }
    @media screen and (max-width: 768px){
        & .mainMenuMobile {
            grid-template-columns: auto;
        }
    }
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
    grid-template-columns: ${({oneGrid}) => (oneGrid ? `auto auto` : `auto`)};
    /* grid-template-columns: auto; */
    grid-gap: 10px 50px;
    & .extras:nth-child(even), & .extras:nth-child(odd){
        margin: 0;
        padding: 0;
        padding-top: 3px;
    }
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